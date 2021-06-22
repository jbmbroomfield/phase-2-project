import { rows, columns, maxDamage } from "../globalProps"
import { choice } from '../random'

const updateBoard = setState => {
    setState(previousState => {
        if (previousState.paused) {
            return previousState
        }
        const chosenCell = chooseEmptyCell(previousState)
        let addedDamage = 0
        const previousCells = previousState.boardCells
        const nextCells = previousCells.map(row => {
            return row.map(value => typeof value === 'number' ? value + 1 : value)
        })
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            addedDamage = updateRow(nextCells, rowIndex, addedDamage, chosenCell)
        }
        const nextDamage = previousState.damage + addedDamage
        const gameOver = nextDamage > maxDamage
        if (gameOver) {
            clearInterval(previousState.interval)
        }
        const nextState = {
            ...previousState,
            damage: nextDamage,
            boardCells: nextCells,
            step: previousState.step + 1,
            gameOver: gameOver
        }
        return nextState
    })
}

const chooseEmptyCell = previousState => {
    if (previousState.step % 10 !== 0) {
        return null
    }
    let emptyCells = []
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        emptyCells = addEmptyCellsFromRow(emptyCells, rowIndex, previousState.boardCells)
    }
    return choice(emptyCells, true)
}

const addEmptyCellsFromRow = (emptyCells, rowIndex, boardCells) => {
    const row = boardCells[rowIndex]
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const value = row[columnIndex]
        value === '' && emptyCells.push([rowIndex, columnIndex])
    }
    return emptyCells
}

const updateRow = (nextCells, rowIndex, addedDamage, chosenCell) => {
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const value = nextCells[rowIndex][columnIndex]
        addedDamage = updateCell(value, nextCells, rowIndex, columnIndex, addedDamage, chosenCell)
    }
    return addedDamage
}

const updateCell = (value, nextCells, rowIndex, columnIndex, addedDamage, chosenCell) => {
    if (typeof value === 'number' && value > 9) {
        nextCells[rowIndex][columnIndex] = 9
        return addedDamage + spreadToNeighbors(rowIndex, columnIndex, nextCells, addedDamage)
    }
    if (chosenCell && chosenCell[0] === rowIndex && chosenCell[1] === columnIndex) {
        nextCells[rowIndex][columnIndex] = 1
    }
    return addedDamage
}

const spreadToNeighbors = (rowIndex, columnIndex, nextCells, addedDamage) => {
    const possibleNeighbors = [
        [rowIndex, columnIndex + 1],
        [rowIndex, columnIndex - 1],
        [rowIndex + 1, columnIndex],
        [rowIndex - 1, columnIndex],
    ]
    const neighbors = possibleNeighbors.filter(neighbor => (
        neighbor[0] >= 0 &&
        neighbor[1] >= 0 &&
        neighbor[0] < rows &&
        neighbor[1] < columns
    ))
    for (const neighbor of neighbors) {
        addedDamage = spreadToNeighbor(nextCells, neighbor, addedDamage)
    }
    return addedDamage
}

const spreadToNeighbor = (nextCells, neighbor, addedDamage) => {
    const neighborValue = nextCells[neighbor[0]][neighbor[1]]
    if (neighborValue === '') {
        nextCells[neighbor[0]][neighbor[1]] = 1
        return 0
    }
    if (typeof neighborValue === 'number') {
        neighborValue >= 9 ? addedDamage++ : nextCells[neighbor[0]][neighbor[1]] += 1
    }
    return addedDamage
}

export default updateBoard
import { rows, columns } from '../globalProps'

const placeItem = (selectedItem, boardCells, rowIndex, columnIndex, score) => {
    let place = true;
    if (selectedItem === 'crossBlue') {
        return clearCross(boardCells, rowIndex, columnIndex, score)
    }
    if (selectedItem.includes('Arrow')) {
        const direction = selectedItem.slice(0, selectedItem.length - 5)
        const oppositeArrowResult = searchForOppositeArrow(boardCells, score, place, direction, rowIndex, columnIndex)
        boardCells = oppositeArrowResult[0]
        score = oppositeArrowResult[1]
        place = oppositeArrowResult[2]
    }
    if (place) {
        boardCells[rowIndex][columnIndex] = selectedItem
    }
    return [boardCells, score]
}

const searchForOppositeArrow = (boardCells, score, place, direction, rowIndex, columnIndex) => {
    const visibleCells = [[rowIndex, columnIndex]]
    let currentCell = []
    currentCell.push(rowIndex)
    currentCell.push(columnIndex)
    const oppositeDirection = {up: 'down', down: 'up', right: 'left', left: 'right'}[direction]
    for (let i = 0; i < 12; i++) {
        currentCell = nextCellInLine(currentCell, direction)
        if (!currentCell) {
            break
        }
        visibleCells.push([currentCell[0], currentCell[1]])
        if (boardCells[currentCell[0]][currentCell[1]] === `${oppositeDirection}Arrow`) {
            [boardCells, score] = clearVisibleCells(visibleCells, boardCells, score)
            place = false
            break
        }
    }
    return [boardCells, score, place]
}

const nextCellInLine = (currentCell, direction) => {
    switch (direction) {
        case 'up':
            currentCell[0]--
            break
        case 'right':
            currentCell[1]++
            break
        case 'down':
            currentCell[0]++
            break
        case 'left':
            currentCell[1]--
            break
        default:
    }
    if (
        currentCell[0] < 0 ||
        currentCell[1] < 0 ||
        currentCell[0] >= rows ||
        currentCell[1] >= columns
    ) {
        return null
    }
    return currentCell
}

function clearVisibleCells(visibleCells, boardCells, score) {
    for (const cell of visibleCells) {
        [boardCells, score] = clearCell(boardCells, cell[0], cell[1], score)
    }
    return [boardCells, score]
}

const clearCell = (boardCells, rowIndex, columnIndex, score, forceClear=false) => {
    const value = boardCells[rowIndex][columnIndex]
    if (value === 'bomb' && !forceClear) {
        return clearSquare(boardCells, rowIndex, columnIndex, score)
    }
    if (typeof value === 'number') {
        score += value
    }
    boardCells[rowIndex][columnIndex] = ''
    return [boardCells, score]
}

const clearCross = (boardCells, rowIndex, columnIndex, score) => {
    if (boardCells[rowIndex][columnIndex] === 'bomb') {
        return clearSquare(boardCells, rowIndex, columnIndex, score)
    }
    [boardCells, score] = clearCell(boardCells, rowIndex, columnIndex, score, true)
    const neighbors = [
        [rowIndex + 1, columnIndex],
        [rowIndex - 1, columnIndex],
        [rowIndex, columnIndex + 1],
        [rowIndex, columnIndex - 1],
    ].filter(neighbor => (
        neighbor[0] >= 0 &&
        neighbor[1] >= 0 &&
        neighbor[0] < rows &&
        neighbor[1] < columns
    ))
    for (const neighbor of neighbors) {
        [boardCells, score] = clearCell(boardCells, neighbor[0], neighbor[1], score)
    }
    return [boardCells, score]
}

const clearSquare = (boardCells, rowIndex, columnIndex, score) => {
    const clearCellResult1 = clearCell(boardCells, rowIndex, columnIndex, score, true)
    boardCells = clearCellResult1[0]
    score = clearCellResult1[1]
    for (const otherRowIndex of [
        rowIndex - 1,
        rowIndex,
        rowIndex + 1
    ].filter(otherRowIndex => otherRowIndex >= 0 && otherRowIndex < rows)) {
        const clearSquareRowResult = clearSquareRow(boardCells, score, rowIndex, columnIndex, otherRowIndex)
        boardCells = clearSquareRowResult[0]
        score = clearSquareRowResult[1]
    }
    return [boardCells, score]
}

const clearSquareRow = (boardCells, score, rowIndex, columnIndex, otherRowIndex) => {
    for (const otherColumnIndex of [
        columnIndex - 1,
        columnIndex,
        columnIndex + 1
    ].filter(otherColumnIndex => (
        otherColumnIndex >= 0 &&
        otherColumnIndex < columns &&
        (rowIndex !== otherRowIndex || columnIndex !== otherColumnIndex)
    ))) {
        const clearCellResult = clearCell(boardCells, otherRowIndex, otherColumnIndex, score)
        boardCells = clearCellResult[0]
        score = clearCellResult[1]
    }
    return [boardCells, score]
}

export default placeItem
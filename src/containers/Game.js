import { useContext } from 'react'
import Header from '../components/Header'
import GameGrid from './GameGrid'
import GameOver from '../components/GameOver'
import Footer from '../components/Footer'
// import { useEffect } from 'react'
// import { choice } from '../random'
// import { Context } from './Store'
import { rows, columns, stepSize, maxDamage } from '../globalProps'
import { Context } from './Store'
import { generateItem, choice } from '../random'
import { newHighScore } from '../gameFunctions'


export default function Game(props) {
    const [state, setState] = useContext(Context)
    
    const startGame = () => {
        const nextForecastCells = initialForecastCells()
        const interval = setInterval(updateBoard, stepSize)
        setState({
            ...state,
            forecastCells: nextForecastCells,
            selectedItem: nextForecastCells[0][0],
            interval: interval,
        })
    }

    const initialForecastCells = () => {
        const result = []
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            result.push([generateItem()])
        }
        return result
    }

    const updateBoard = () => {
        setState(previousState => {
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
                newHighScore('Jim', previousState.score)
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
        const emptyCells = []
        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            addEmptyCellsFromRow(emptyCells, rowIndex)
        }
        return choice(emptyCells, true)

    }

    const addEmptyCellsFromRow = (emptyCells, rowIndex) => {
        const row = state.boardCells[rowIndex]
        for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
            const value = row[columnIndex]
            value === '' && emptyCells.push([rowIndex, columnIndex])
        }
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


    // const [rows, columns] = [8,8]

    // const [damage, setDamage] = useState(0)

    // const [itemIndex, setItemIndex] = useState(0)

    // const [item, _setItem] = useState('')

    // const setItem = (item, itemIndex=0) => {
    //     _setItem(item)
    //     setItemIndex(itemIndex)
    // }

    // const addDamage = (addedDamage=1) => {
    //     setDamage(damage + addedDamage)
    // }




 

    // const [state, setState] = useContext(Context)

    // useEffect(() => {
    //     const randomRow = Math.floor(Math.random() * rows)
    //     const randomColumn = Math.floor(Math.random() * columns)
    // })

    return (
        <div className='game'>
            <Header startGame={startGame} />
            {state.gameOver ? <GameOver /> : <GameGrid />}
            <Footer />
        </div>
    )
}
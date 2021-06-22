import { useContext } from 'react'
import { Context } from './Store'
import Matrix from '../components/Matrix'
import placeItem from '../functions/placeItem'
import getNextForecastCells from '../functions/getNextForecastCells'
import updateBoard from '../functions/updateBoard'
 
 export default function Board(props) {
    const [state, setState] = useContext(Context)

    const cellClick = (rowIndex, columnIndex) => {
        const previousBoardCells = state.boardCells
        const previousForecastCells = state.forecastCells
        const previousSelectedItemIndex = state.selectedItemIndex
        const previousScore = state.score
        const [nextBoardCells, nextScore] = placeItem(state.selectedItem, previousBoardCells, rowIndex, columnIndex, previousScore, state.levelData)
        const nextForecastCells = getNextForecastCells(previousForecastCells, previousSelectedItemIndex)
        const forecastCooldowns = state.forecastCooldowns
        const previousLevelData = state.levelData
        if (previousSelectedItemIndex > 0) {
            forecastCooldowns[previousSelectedItemIndex] = state.step + 5 * previousSelectedItemIndex
        }
        const previousLevel = state.level
        const previousInterval = state.interval
        const levelsData = state.levelsData
        let nextLevel = previousLevel, nextLevelData = previousLevelData, nextInterval = previousInterval
        if (nextScore >= state.levelData.goal && levelsData.length > previousLevel + 1) {
            nextLevel += 1
            nextLevelData = levelsData[nextLevel]
            clearInterval(previousInterval)
            nextInterval = setInterval(() => {
                updateBoard(setState)
            }, nextLevelData.stepSize)
        }
        setState({
            ...state,
            boardCells: nextBoardCells,
            forecastCells: nextForecastCells,
            score: nextScore,
            selectedItemIndex: 0,
            selectedItem: nextForecastCells[0][0],
            forecastCooldowns: forecastCooldowns,
            levelData: nextLevelData,
            level: nextLevel,
            interval: nextInterval,
        })
    }

    

    return (
        <Matrix
            cells={state.boardCells}
            className='board'
            startingColumn={1}
            cellClick={cellClick}
        />
    )
}
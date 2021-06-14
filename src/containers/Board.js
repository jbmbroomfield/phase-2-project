import { useContext } from 'react'
import { Context } from './Store'
import Matrix from '../components/Matrix'

import { placeSelectedItem, getNextForecastCells } from '../gameFunctions'
 
 export default function Board(props) {
    const [state, setState] = useContext(Context)

    const cellClick = (rowIndex, columnIndex) => {
        const previousBoardCells = state.boardCells
        const previousForecastCells = state.forecastCells
        const previousSelectedItemIndex = state.selectedItemIndex
        const previousScore = state.score
        const [nextBoardCells, nextScore] = placeSelectedItem(state.selectedItem, previousBoardCells, rowIndex, columnIndex, previousScore)
        const nextForecastCells = getNextForecastCells(previousForecastCells, previousSelectedItemIndex)
        const forecastCooldowns = state.forecastCooldowns
        if (previousSelectedItemIndex > 0) {
            forecastCooldowns[previousSelectedItemIndex] = state.step + 5 * previousSelectedItemIndex
        }
        setState({
            ...state,
            boardCells: nextBoardCells,
            forecastCells: nextForecastCells,
            score: nextScore,
            selectedItemIndex: 0,
            selectedItem: nextForecastCells[0][0],
            forecastCooldowns: forecastCooldowns,
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
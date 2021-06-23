import { useContext } from 'react'
import { Context } from '../containers/Store'
import getCellDisplayValue from '../functions/getCellDisplayValue'

export default function Cell(props) {
    // console.log('Cell')

    // const [state, setState] = useContext(Context)
    const state = useContext(Context)[0]
    const value = props.value

    const levelData = state.levelData

    const getGreyedOut = () => {
        if (props.className !== 'forecast' || !state.started || state.paused) {
            return false
        }
        return state.forecastCooldowns[props.rowIndex] > state.step
    }

    const getCLickable = greyedOut => {
        if (greyedOut || state.paused) {
            return false
        }
        if (props.className === 'forecast') {
            return props.rowIndex !== state.selectedItemIndex
        }
        if (value === '') {
            return true
        }
        const selectedItem = state.selectedItem
        return selectedItem.includes('Blue')
    }

    const greyedOut = getGreyedOut()

    const clickable = getCLickable(greyedOut)

    const handleClick = () => {
        if (!clickable) {
            return
        }
        props.cellClick(props.rowIndex, props.columnIndex)
    }

    const rowStart = props.rowIndex + 1
    const rowEnd = rowStart + 1
    const columnStart = props.startingColumn + props.columnIndex
    const columnEnd = columnStart + 1

    const style = {
        gridArea: `${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd}`
    }
    if (typeof value === 'number') {
        style.color = levelData.purple
    }

    const displayValue = state.paused || !state.started ? '' : getCellDisplayValue(value, state.levelData)

    const selected = props.className === 'forecast' && props.rowIndex === state.selectedItemIndex
    return (
        <div
            className={`cell cell-${props.className}${clickable ? ' clickable' : ''}${selected ? ' selected' : ''}${greyedOut ? ' greyed-out' : ''}`}
            onClick={handleClick}
            style={style}
        >
            <div className="cell-value">{displayValue}</div>
        </div>
    )
}
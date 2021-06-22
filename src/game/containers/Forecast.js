import Matrix from '../components/Matrix'
import { useContext } from 'react'
import { Context } from './Store'
import { columns } from '../globalProps'


export default function Forecast(props) {
   
    const [state, setState] = useContext(Context)

    const cellClick = (rowIndex) => {
        setState({
            ...state,
            selectedItemIndex: rowIndex,
            selectedItem: state.forecastCells[rowIndex][0],
        })
    }



    return (
        <Matrix
            cells={state.forecastCells}
            className='forecast'
            startingColumn={columns + 2}
            cellClick={cellClick}
        />
    )
}
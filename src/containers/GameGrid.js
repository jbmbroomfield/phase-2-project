import Board from './Board'
import Forecast from './Forecast'
import { columns } from '../globalProps'


export default function GameGrid(props) {

    const style = {
        gridTemplateColumns: `repeat(${columns + 2}, 1fr)`,
    }

    return (
        <div className='game-grid' style={style}>
            <Board />
            <Forecast />
        </div>
    )
}
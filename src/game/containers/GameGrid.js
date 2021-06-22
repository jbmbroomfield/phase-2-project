import Board from './Board'
import Forecast from './Forecast'
import Level from '../components/Level'
import Score from '../components/Score'
import Damage from '../components/Damage'
import Pause from '../components/Pause'
import { columns } from '../globalProps'


export default function GameGrid(props) {

    const style = {
        gridTemplateColumns: `repeat(${columns + 8}, 1fr)`,
    }

    return (
        <div className='game-grid' style={style}>
            <Board />
            <Forecast />
            <Level />
            <Score />
            <Damage />
            <Pause />
        </div>
    )
}
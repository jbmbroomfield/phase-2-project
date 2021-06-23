import { useContext } from 'react'
import { Context } from '../containers/Store'
import { columns } from '../globalProps'
import startGame from '../functions/startGame'

export default function Pause(props) {
    const [state, setState] = useContext(Context)

    const levelData = state.levelData
    const style = {
        gridArea: `7 / ${columns + 4} / 9 / ${columns + 9}`,
        backgroundColor: levelData.blue,
    }

    const value = state.started ? (state.paused ? 'Resume' : 'Pause') : 'Start'

    const handleClick = () => {
        if (!state.started) {
            startGame(state, setState)
            return
        }
        setState({
            ...state,
            paused: !state.paused
        })
    }

    return (
        <div className="pause panel clickable" style={style} onClick={handleClick}>
            {value}
        </div>
    )
}
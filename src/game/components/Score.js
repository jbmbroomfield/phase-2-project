import { useContext } from 'react'
import { Context } from '../containers/Store'
import { columns } from '../globalProps'

export default function Score(props) {
    const [state, setState] = useContext(Context)
    const levelData = state.levelData
    const style = {
        gridArea: `3 / ${columns + 4} / 5 / ${columns + 9}`,
        backgroundColor: levelData.green,
    }

    return (
        <div className="score panel" style={style}>
            {state.started && `Score: ${state.score} / ${levelData.goal}`}
        </div>
    )

}
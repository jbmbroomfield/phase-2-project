import { useContext } from 'react'
import { Context } from '../containers/Store'
import { columns } from '../globalProps'

export default function Damage(props) {
    const [state, setState] = useContext(Context)
    const levelData = state.levelData
    const style = {
        gridArea: `5 / ${columns + 4} / 7 / ${columns + 9}`,
        backgroundColor: levelData.purple,
    }

    return (
        <div className="damage panel" style={style}>
            {state.started && `Damage: ${state.damage}`}
        </div>
    )
} 
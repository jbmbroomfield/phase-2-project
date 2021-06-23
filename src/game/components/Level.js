import { useContext } from 'react'
import { Context } from '../containers/Store'
import { columns } from '../globalProps'

export default function Level(props) {
    const state = useContext(Context)[0]
    const levelData = state.levelData
    const style = {
        gridArea: `1 / ${columns + 4} / 3 / ${columns + 9}`,
        backgroundColor: levelData.green,
    }

    return (
        <div className="level panel" style={style}>
            {state.started && `Level ${state.level} - ${levelData.name}`}
        </div>
    )
}
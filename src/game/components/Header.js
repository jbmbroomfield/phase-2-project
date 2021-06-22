import { Context } from '../containers/Store'
import { useContext } from 'react'


export default function Header(props) {
    
    // const [state, setState] = useContext(Context)
    const state = useContext(Context)[0]
    return (
        <div className='header' onClick={props.startGame}>
            <h1>Damage: {state.damage}; Score: {state.score}</h1>
        </div>
    )
}
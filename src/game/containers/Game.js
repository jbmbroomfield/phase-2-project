import { useContext } from 'react'
import GameGrid from './GameGrid'
import GameOver from '../components/GameOver'
import { Context } from './Store'


export default function Game(props) {
    const state = useContext(Context)[0]
    return (
        <div className='game'>
            {state.gameOver ? <GameOver /> : <GameGrid />}
        </div>
    )
}
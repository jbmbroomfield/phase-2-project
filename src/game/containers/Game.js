import { useContext } from 'react'
import Header from '../components/Header'
import GameGrid from './GameGrid'
import GameOver from '../components/GameOver'
import Footer from '../components/Footer'
import { rows, columns, stepSize, maxDamage } from '../globalProps'
import { Context } from './Store'
import { generateItem, choice } from '../random'
import startGame from '../functions/startGame'


export default function Game(props) {
    const [state, setState] = useContext(Context)
    return (
        <div className='game'>
            {/* <Header startGame={() => {startGame(state, setState)}} /> */}
            {state.gameOver ? <GameOver /> : <GameGrid />}
            <Footer />
        </div>
    )
}
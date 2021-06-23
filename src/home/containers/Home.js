import NewGame from '../components/NewGame'
import HighScores from '../components/HighScores'
import HowToPlay from '../containers/HowToPlay'

export default function Home(props) {
    return (
        <div className="home">
            <div className="heading">
                <h1>React Game</h1>
            </div>
            <NewGame />
            <HighScores />
            <HowToPlay />
        </div>
    )
}
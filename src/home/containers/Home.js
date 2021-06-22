import NewGame from '../components/NewGame'
import HighScores from '../components/HighScores'

export default function Home(props) {
    return (
        <div className="home">
            <NewGame />
            <HighScores />
        </div>
    )
}
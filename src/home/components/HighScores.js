import { Link } from 'react-router-dom'

export default function NewGame(props) {
    return (
        <div className="new-game">
            <Link
                to="/high-scores"
                exact
            >
                High Scores
            </Link>
        </div>
    )
}
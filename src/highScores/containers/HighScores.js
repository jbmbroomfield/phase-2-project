import { useState, useEffect } from 'react'
import HighScoreTable from '../components/HighScoreTable'
import { Link } from 'react-router-dom'

export default function HighScores(props) {
    const [state, setState] = useState([])
    const url = `http://localhost:3000/high_scores_db`
    // const url = 'https://my-json-server.typicode.com/jbmbroomfield/phase-2-project-json-server/high_scores_db'

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setState(json)
        })
    })

    return (
        <div>
            <h1>High Scores</h1>
            <Link
                to="/phase-2-project"
                exact
            >
                Home
            </Link>
            <HighScoreTable data={state} />
        </div>
    )
}
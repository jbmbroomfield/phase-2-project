import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function HighScores(props) {
    const [state, setState] = useState([])
    const url = `http://localhost:3000/high_scores_db`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {setState(json)})
    }, [])

    const handleClick = () => {
        // newHighScore('Jim', 997)
    }

    return (
        <div>
            {state.map(d => <div>{d.name}: {d.score}</div>)}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
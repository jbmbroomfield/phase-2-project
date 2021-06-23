import { useContext } from 'react'
import { Context } from '../containers/Store'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'

export default function GameOver(props) {

    const state = useContext(Context)[0]
    const history = useHistory()

    const submitHighScore = event => {
        event.preventDefault()
        const url = `http://localhost:3000/high_scores_db`
        // const url = 'https://my-json-server.typicode.com/jbmbroomfield/phase-2-project-json-server/high_scores_db'
        const nameText = document.getElementById('name-text')
        const name = nameText.value
        const levelData = state.levelData
        const date = new Date()
        const dateString = date.toDateString()
        const data = {
            "name": name,
            "score": state.score,
            "level": `${levelData.id} - ${levelData.name}`,
            "date": dateString,
            "id": uuidv4(),
        }
        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(url, configObject)
        history.push('/phase-2-project/high-scores')
    }

    return (
        <div>
            <h1>Game Over! You scored {state.score} points.</h1>
            <form onSubmit={submitHighScore}>
                <input type="text" id="name-text" placeholder="Your name" />
                <input id="submit-button" type="submit" value="Submit Score" />
            </form>
        </div>
    )
}
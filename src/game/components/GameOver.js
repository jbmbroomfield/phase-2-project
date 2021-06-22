import { useContext } from 'react'
import { Context } from '../containers/Store'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'

export default function GameOver(props) {

    const [state, setState] = useContext(Context)
    const history = useHistory()

    const submitHighScore = event => {
        console.log('submitting high score')
        event.preventDefault()
        const url = `http://localhost:3000/high_scores_db`
        const nameText = document.getElementById('name-text')
        const name = nameText.value
        const data = {"name": name, "score": state.score, "id": uuidv4()}
        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        console.log({data})
        fetch(url, configObject)
        history.push('/high-scores')
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
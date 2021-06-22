import { v4 as uuidv4 } from 'uuid'

const newHighScore = (name, score) => {
    const url = `http://localhost:3000/high_scores_db`
    const data = {"name": name, "score": score, "id": uuidv4()}
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, configObject)
}

export default newHighScore
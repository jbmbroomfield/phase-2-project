import { generateItem, choice } from '../random'
import updateBoard from './updateBoard'
import { rows } from '../globalProps'

const startGame = (state, setState) => {
    const nextForecastCells = initialForecastCells()
    fetch('https://jbmbroomfield.github.io/Data/levels_data.json')
    .then(response => response.json())
    .then(json => {
        const levelData = json[0]
        console.log({state})
        setState({
            ...state,
            levelsData: json,
            levelData: levelData,
            forecastCells: nextForecastCells,
            selectedItem: nextForecastCells[0][0],
            interval: setInterval(() => {
                updateBoard(setState)
            }, levelData.stepSize),
            started: true,
        })
    })
}

const initialForecastCells = () => {
    const result = []
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        result.push([generateItem()])
    }
    return result
}

export default startGame
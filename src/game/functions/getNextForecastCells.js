import { generateItem } from '../random'

const getNextForecastCells = (previousForecastCells, previousSelectedItemIndex) => {
    return [
        ...previousForecastCells.slice(0, previousSelectedItemIndex),
        ...previousForecastCells.slice(previousSelectedItemIndex + 1),
        [generateItem()],
    ]
}

export default getNextForecastCells
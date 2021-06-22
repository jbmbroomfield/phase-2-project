import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp as arrow, faPlus as plus, faBomb as bomb } from '@fortawesome/free-solid-svg-icons'

const getCellDisplayValue = (value, levelData) => {
    if (!levelData) {
        return '?'
    }
    if (typeof value === 'number' || value === '') {
        return value
    }
    const [icon, color, rotation] = {
        upArrow: [arrow, levelData.green, 0],
        rightArrow: [arrow, levelData.green, 90],
        downArrow: [arrow, levelData.green, 180],
        leftArrow: [arrow, levelData.green, 270],
        crossBlue: [plus, levelData.blue, 0],
        crossRed: [plus, levelData.red, 0],
        bomb:  [bomb, levelData.red, 0],
    }[value]
    return <FontAwesomeIcon icon={icon} color={color} rotation={rotation} />
}

export default getCellDisplayValue
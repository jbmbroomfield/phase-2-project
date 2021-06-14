const probabilityObject = {
    upArrow: 1,
    rightArrow: 1,
    downArrow: 1,
    leftArrow: 1,
    crossBlue: 1,
    crossRed: 1,
    bomb: 1,
}

export const generateItem = () => choice(probabilityObject)

export function choice(object, shallow=false) {
    if (Object.keys(object).length === 0) {
        return null
    }
    const array = getChoiceArray(object)
    const randomIndex = Math.floor(Math.random() * array.length)
    const result = array[randomIndex]
    if (!shallow && typeof result === 'object') {
        return choice(result)
    }
    return result
}

function getChoiceArray(object) {
    if (Array.isArray(object)) {
        return object
    }
    const array = []
    for (const item in object) {
        pushMultiple(array, item, object[item])
    }
    return array
}

function pushMultiple(array, item, times) {
    for (let i = 0; i < times; i++) {
        array.push(item)
    }
    return array
} 


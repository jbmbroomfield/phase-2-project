import React, { useState } from 'react'

import { rows, columns } from '../globalProps'


const initialRow = rowIndex => {
    const row = []
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        row.push('')
    }
    return row
}

const initialBoardCells = []
for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    initialBoardCells.push(initialRow(rowIndex))
}



const initialForecastCells = []
const initialForecastCooldowns = []
for (let i = 0; i < rows; i++) {
    // initialForecastCells.push([generateItem()])
    initialForecastCells.push([''])
    initialForecastCooldowns.push(0)
}


const initialState = {
    boardCells: initialBoardCells,
    forecastCells: initialForecastCells,
    forecastCooldowns: initialForecastCooldowns,
    selectedItem: '',
    selectedItemIndex: 0,
    damage: 0,
    step: 0,
    interval: null,
    score: 0,
}

export const Context = React.createContext()

export default function Store({ children }) {
    const [state, setState] = useState(initialState)

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )

    
}
import Cell from './Cell'

export default function Matrix(props) {
    const cells = props.cells

    const rowMap = (row, rowIndex) => {
        if (typeof row !== 'object') {
            console.log('non-object')
            return
        }
        return row.map((value, columnIndex) => <Cell
            key={`cell-${columnIndex},${rowIndex}`}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            value={value}
            setCell={props.setCell}
            className={props.className}
            startingColumn={props.startingColumn}
            cellClick={props.cellClick}
        />)
    }
    if (cells === undefined) {
        console.log('cells undefined')
        console.log(props.className)
        return
    }
    if (typeof cells[0] === 'object') {
        return cells.map((row, rowIndex) => rowMap(row, rowIndex))
    }
    return rowMap(cells, 0)
}
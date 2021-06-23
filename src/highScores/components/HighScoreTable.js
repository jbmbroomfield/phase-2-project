import HighScoreRow from './HighScoreRow.js'

export default function HighScoreTable(props) {
    const data = props.data
    const sortedData = data.sort((a, b) => b.score - a.score)
    return (
        <table>
            <tr className="row row-even">
                <th>Rank</th>
                <th>Player</th>
                <th>Date</th>
                <th>Level</th>
                <th>Score</th>
            </tr>
            {sortedData.map((rowData,index) => <HighScoreRow data={rowData} rank={index + 1}/>)}
        </table>
    )
}
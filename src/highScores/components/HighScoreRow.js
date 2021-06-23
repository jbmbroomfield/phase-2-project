export default function HighScoreRow(props) {
    const data = props.data
    const parity = props.rank % 2 === 0 ? 'even' : 'odd'
    return (
        <tr className={`row row-${parity}`}>
            <td className="right-align">{props.rank}</td>
            <td className="left-align">{data.name}</td>
            <td>{data.date}</td>
            <td className="left-align">{data.level}</td>
            <td className='right-align'>{data.score}</td>
        </tr>
    )
}
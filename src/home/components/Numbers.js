export default function Numbers(props) {
    return (
        <>
            <div className="text">
                Numbers will grow on the board from 1 to 9.
                Once they reach 9 they will spread to adjacent cells.
                If they cannot spread, you will take damage.
                Take 1000 damage and it's game over.
                Clear numbers from the board to score points.
            </div>
            <div style={{color: 'purple'}}>
                9
            </div>
        </>
    )
}
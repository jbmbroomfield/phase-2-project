import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb as bomb } from '@fortawesome/free-solid-svg-icons'

export default function Bombs(props) {
    return (
        <>
            <div className="text">
                Place bombs in empty cells.
                When a bomb is cleared, it also clears the 8 surrounding cells.
            </div>
            <div>
                <FontAwesomeIcon icon={bomb} color='red' />
            </div>
        </>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus as plus } from '@fortawesome/free-solid-svg-icons'

export default function Crosses(props) {
    return (
        <>
            <div className="text">
                Place crosses in any cells. The cell the cross is placed in and the four neighbouring cells are cleared.
            </div>
            <div>
                <FontAwesomeIcon icon={plus} color='blue' />
            </div>
        </>
    )
}
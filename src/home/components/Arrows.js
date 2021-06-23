import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp as arrow } from '@fortawesome/free-solid-svg-icons'

export default function Arrows(props) {
    return (
        <>
            <div className="text">
                Place arrows in empty cells.
                When two arrows point at each other, the cells they occupy and all cells in between are cleared.
            </div>
            <div>
                <FontAwesomeIcon icon={arrow} color='green' rotation={90} /> 
                <FontAwesomeIcon icon={arrow} color='green' rotation={270} />
            </div>
        </>
    )
}
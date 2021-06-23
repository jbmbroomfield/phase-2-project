import Numbers from '../components/Numbers'
import Arrows from '../components/Arrows'
import Crosses from '../components/Crosses'
import Bombs from '../components/Bombs'

export default function HowToPlayGrid(props) {
    return (
        <div className='how-to-play-grid'>
            <Numbers />
            <Arrows />
            <Crosses />
            <Bombs />
        </div>
    )
}
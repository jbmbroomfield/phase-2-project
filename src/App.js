import Game from './game/containers/Game'
import Store from './game/containers/Store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home/containers/Home'
import HighScores from './highScores/containers/HighScores'

function GameRoute(props) {
	return (
		<Store>
			<Game />
		</Store>
	)
}

function App(props) {
	return (
		<Router>
			<div>
				<Route exact path="/phase-2-project" component={Home} />
				<Route exact path="/phase-2-project/game" component={GameRoute} />
				<Route exact path="/phase-2-project/high-scores" component={HighScores} />
			</div>
		</Router>
	);
}

export default App;

import Game from './containers/Game'
import Store from './containers/Store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import HighScores from './containers/HighScores'

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
				<Route exact path="/" component={Home} />
				<Route exact path="/game" component={GameRoute} />
				<Route exact path="/high-scores" component={HighScores} />
			</div>
		</Router>
	);
}

export default App;

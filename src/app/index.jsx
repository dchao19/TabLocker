import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Main from './components/main.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Main} />
			</Router>
		)
	}
}

render(<App/>, document.getElementById('app'));
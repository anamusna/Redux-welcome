import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import { store } from './store';
import ButtonGroup from './ButtonGroup';

class App extends Component {
	render() {
		return (
			<div className="container">
				<HelloWorld tech={store.getState().tech} />
				<br />
				<ButtonGroup technologies={[ 'React', 'Redux', 'Miscellaneous' ]} />
			</div>
		);
	}
}

export default App;

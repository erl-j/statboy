import React, { Component } from 'react';
import qAPI from './qAPI/qAPI';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.api = new qAPI();
		this.state = {
			question:null
		};
		this.api.getQuestion(0).then(res => this.setState({ question:res }));
	}

	componentDidMount() {}

	render() {

		// let content="loading question";

		// if(this.state.question){
		// 	=this.state.question.q} ? unit:{this.state.question.unit}</h4>;
		// }

		return (
			<React.Fragment>
				<h1>STATBOY9z</h1>
				<h2>{this.state.question?this.state.question.q:""}</h2>
				<h3>{this.state.question?this.state.question.unit:""}</h3>
				<input></input>
			</React.Fragment>
		);
	}
}

export default App;

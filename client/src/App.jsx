import React, { Component } from 'react';
import './App.css';
import qAPI from './qAPI/qAPI';

class App extends Component {
	constructor() {
		super();
		this.api = new qAPI();
		this.state = {
			question:null, //bad name
			guess:"",
			answered:false
		};
		this.api.getQuestion(0).then(res => this.setState({ question:res }));
	}

	onEnter(){
		this.setState({answered:true})
	}

	render() {

		return (
			<React.Fragment>
				<h1>STATBOY</h1>
				<h2 className="text-left">>{this.state.question?this.state.question.q:""}</h2>
				<h3 className="text-left">({this.state.question?this.state.question.unit:""})</h3>
				<input onKeyPress={(e)=>e.keyCode||e.charCode==13?this.onEnter():""}   onChange={e=>this.setState({guess:e.target.value})}></input>
				<h3 className="text-center">{this.state.answered?this.state.question.a:"press enter"} </h3>
				<h3 className="text-left">score:{this.state.answered?Math.log10(Math.abs((Number(this.state.question.a)-Number(this.state.guess)))):"---"} </h3>
				
			</React.Fragment>
		);
	}
}



export default App;

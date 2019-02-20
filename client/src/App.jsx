import React, { Component } from 'react';
import './App.css';
import qAPI from './qAPI/qAPI';
import { TIMEOUT } from 'dns';

class App extends Component {
	constructor() {
		super();
		this.api = new qAPI();
		this.state = {
			id: 0,
			question: null, //bad name
			oldQuestion:null,
			guess: '',
			answered: false,
			totalScore: 0,
		};
		this.api.getQuestion(this.state.id).then(res => this.setState({ question: res }));
	}

	onEnter() {
		if (this.state.answered) {
			this.setState({ totalScore: this.state.totalScore + this.state.score });
			this.api
				.getQuestion(this.state.id + 1)
				.then(res => this.setState({ question: res, id: this.state.id + 1, answered: false, score: 9999999 }));
		} else {
			this.setState({
				score:
					Math.abs(Math.log(this.state.question.a) - Math.log(this.state.guess)) /
					Math.log(this.state.question.a),
					answered: true 
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<h1>STATBOY</h1>
				<div >
					<h2 key={this.state.id} className={"text-left "+this.state.answered==true?"exiter":""}>>{this.state.question ? this.state.question.q : ''}</h2>
					<h3 className="text-left">({this.state.question ? this.state.question.unit : ''})</h3>
					<input
						onKeyPress={e => (e.keyCode || e.charCode == 13 ? this.onEnter() : '')}
						onChange={e => this.setState({ guess: e.target.value })}
					/>
					<h3 className="text-center">{this.state.answered ? this.state.question.a : 'press enter'} </h3>
					<h3 className="text-left">
						score:
						{this.state.answered ? this.state.score.toFixed(4) : '-'}
					</h3>

					</div>
					<h3 className="text-left">
						total score:
						{this.state.totalScore.toFixed(4)}
					</h3>
				
			</React.Fragment>
		);
	}
}

export default App;

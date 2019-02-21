import React, { Component } from 'react';
import './App.css';
import qAPI from './qAPI/qAPI';

import QuestionHolder from './QuestionHolder/QuestionHolder';

class App extends Component {
	constructor() {
		super();
		this.api = new qAPI();
		this.state = {
			id: 0,
			question: null,
			oldQuestion: null,
			guess: '',
			answered: false,
			totalScore: 0,
			negativeMode: false,
		};
		this.api.getQuestion(this.state.id).then(res => this.setState({ question: res }));
	}

	onEnter() {
		if (this.state.answered) {
			this.setState({ totalScore: this.state.totalScore + this.state.score, oldQuestion: this.state.question });
			this.api
				.getQuestion(this.state.id + 1)
				.then(res => this.setState({ question: res, id: this.state.id + 1, answered: false, score: 9999999 }));
		} else {
			this.setState({
				score:
					Math.abs(Math.log(this.state.question.a) - Math.log(this.state.guess)) /
					Math.log(this.state.question.a),
				answered: true,
			});
		}
	}

	render() {
		return (
			<div className={this.state.negativeMode == true ? "row inv" : "row"}>
			 >
				<div className="col bb">
					<h1 className="text-center"
					onClick={() => {
						this.setState({ negativeMode: !this.state.negativeMode }, this.forceUpdate);
						console.log('h1 clicked');
					}}
					>STATBOY</h1>
				</div>
				<div className="w-100" />
				<div className="col ">
					<div className="mt-5 ml-5">
						{this.state.question != null ? (
							<QuestionHolder
								key={this.state.question.id}
								question={this.state.question}
								oldQuestion={this.state.oldQuestion}
							/>
						) : (
							''
						)}
					</div>
				</div>
				<div className="w-100" />
				<div className="col text-center">
					<input
						onKeyPress={e => (e.keyCode || e.charCode == 13 ? this.onEnter() : '')}
						onChange={e => this.setState({ guess: e.target.value })}
					/>
				</div>
				<div className="w-100" />
				<div className="col">
					<h3 className="text-center">{this.state.answered ? this.state.question.a : '?'} </h3>
				</div>
				<div className="w-100" />
				<div className="col">
					<h3 className="text-left ml-5">
						score:
						{this.state.answered ? this.state.score.toFixed(4) : '-'}
					</h3>
				</div>
				<div className="w-100" />
				<div className="col">
					<h3 className="text-left ml-5">
						total score:
						{this.state.totalScore.toFixed(4)}
					</h3>
				</div>
			</div>
		);
	}
}

export default App;

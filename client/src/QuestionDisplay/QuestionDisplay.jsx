import React, { Component } from 'react';
import '../App.css';

class QuestionDisplay extends Component {
	render() {
		return (
            this.props.question?
			<div className="text-left">
				<h2>{this.props.question.q}</h2>
				<h3 >{this.props.question.unit}</h3>
			</div>
            :""
		);
	}
}

export default QuestionDisplay;

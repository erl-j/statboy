import React, { Component } from 'react';
import '../App.css';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay';

class QuestionHolder extends Component {
	render() {
		return (
			<div
			 style={{ position: 'relative'}}
			>
				<div className="enterer" style={{ position: "relative", top: '0rem'}}>
					<QuestionDisplay question={this.props.question}  />
				</div>
				<div 
				className="exiter" 
				style={{ position: "absolute", top: '0rem' }}>
					<QuestionDisplay question={this.props.oldQuestion} ></QuestionDisplay>
				</div>
			</div>
		);
	}
}

export default QuestionHolder;

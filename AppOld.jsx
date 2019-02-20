import React, { Component } from 'react';
import scbAPI from './scbAPI/scbAPI';
import './App.css';
import { isFunction } from 'util';

class App extends Component {
	constructor() {
		super();
		this.api = new scbAPI();
		this.state = {
			question:null
		};
		this.api.getQuestion(0).then(res => this.setState({ question:res }));
	}

	componentDidMount() {}

	render() {
		// let content = 'Loading content';
		// if (this.state.data != null) {
		// 	content = (
		// 		<div>
		// 			<h4>{this.state.data.title}</h4>
		// 			<ul>
		// 				{Object.values(this.state.data.variables).map(v => (
		// 					v.code==="ContentsCode"? "":<li key={v.code}>{v.code}</li>
        //     ))
        //     }
		// 			</ul>
        //     <h3>Contents code:</h3>
		// 				{Object.values(this.state.data.variables).map(v => (
		// 					v.code==="ContentsCode"? <ul key={v.code}>{
        //         v.valueTexts.map(t=><li key={t}>{t}</li>)
                
        //       }</ul>:""
        //     ))}
		// 		</div>
		// 	);
		// }

		let content="loading question";

		if(this.state.question){
			content=<h4>{this.state.question}</h4>;
		}

		return (
			<React.Fragment>
				<h3>STATBOY</h3>
				{/* {Object.values(this.state.data).map(d=><h3 key={d.id}>{d.text}</h3>)} */}
				{content}
			</React.Fragment>
		);
	}
}

export default App;

import { Component } from 'react';

// const BASE_URL = '';

class qAPI extends Component {
	getQuestion(id) {

		let url = 'http://127.0.0.1:8081/?question='+id;
		return fetch(url).then(this.processResponse);
	}

	processResponse(response) {
		if (response.ok) {
			return response.json();
		}
		throw response;
	}
}
export default qAPI;

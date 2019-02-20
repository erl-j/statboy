import { Component } from 'react';

// const BASE_URL = '';

class scbAPI extends Component {
	getData() {
		let url = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
		return fetch(url).then(this.processResponse);
	}

	getRandomItem() {
        let url = 'http://api.scb.se/OV0104/v1/doris/en/ssd';
        return this.randomWalk(url);
    }
    
    // extractVariables(res){
    //     return Object.values(res).map(dsh=>dsh.code);
    // }

	randomWalk(url) {
        console.log(url);
		return fetch(url)
			.then(this.processResponse)
			.then(res => 
				Array.isArray(res) ? this.randomWalk(url + "/"+ res[Math.floor(Math.random() * res.length)].id) : res
			);
	}

	processResponse(response) {
		if (response.ok) {
			return response.json();
		}
		throw response;
	}
}
export default scbAPI;

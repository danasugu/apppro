import React, { Component } from 'react';

class Post extends Component {
	state = {
		name: 'Mario',
		age: '25',
		skills: [ 'React', 'Javascript', 'HTML', 'Laravel' ]
	};
	render() {
		return (
			<div>
				<h1>this is post component</h1>
				{new Date().toLocaleString()}
				<p>Name: {this.state.name}</p>
				<p>Age: {this.state.age}</p>
				<p>Skills: {this.state.skills.join(', ')}</p>
			</div>
		);
	}
}

export default Post;

import React, { Component } from 'react';

class Post extends Component {
	state = {
		name: 'Mario',
		age: '25',
		skills: [ 'React', 'Javascript', 'HTML', 'Laravel' ]
	};

	handleClick = (e) => {
		console.log(this.state);
	};

	handleMouseOver = (e) => {
		console.log(e.target, e.pageX);
	};

	handleCopy = (e) => {
		console.log('The paragraph has been copied');
	};

	render() {
		return (
			<div>
				<h1>this is post component</h1>
				{new Date().toLocaleString()}
				<p>Name: {this.state.name}</p>
				<p>Age: {this.state.age}</p>
				<p>Skills: {this.state.skills.join(', ')}</p>
				<button onClick={this.handleClick}>Click</button>
				<button onMouseOver={this.handleMouseOver}>Mouse Over</button>
				<p onCopy={this.handleCopy}>This is a test paragraph</p>
			</div>
		);
	}
}

export default Post;

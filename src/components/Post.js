import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div>
				<h1>this is post component</h1>
				{new Date().toLocaleString()}
			</div>
		);
	}
}

export default Post;

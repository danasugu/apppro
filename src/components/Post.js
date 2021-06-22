// import { getDefaultNormalizer } from '@testing-library/react';
import React, { Component } from 'react';
import Student from './Student';
import Teacher from './Teacher';

class Post extends Component {
	state = {
		name   : 'Mario',
		email  : '',
		phone  : '',
		age    : '25',
		skills : [
			'React',
			'Javascript',
			'HTML',
			'Laravel'
		]
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

	handleChangeState = (e) => {
		this.setState({
			name   : 'Alison',
			age    : 19,
			skills : [
				'PHP',
				'Java',
				'Node.js'
			]
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('name', this.state.name);
		console.log('email', this.state.email);
		console.log('phone', this.state.phone);
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
				<button onClick={this.handleChangeState}>Change state</button>
				<form onSubmit={this.handleSubmit}>
					Name: <input type='text' name='name' onChange={this.handleChange} /> <br />
					Email: <input type='email' name='email' onChange={this.handleChange} />
					<br />
					Phone: <input type='phone' name='phone' onChange={this.handleChange} />
					<br />
					<button type='submit'>Submit</button>
				</form>
				<br />
				<Student name="Allen" email="allen@allen.com" phone="97614286321" />
				<Student name="Redna" email="rdn@rdn.com" phone="09253286333" />
			<h2><Teacher name="Ron" email="ron@ron.com" phone="067264329191" /></h2>	
			</div>
		);
	}
}

export default Post;

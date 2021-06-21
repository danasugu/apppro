import { Component } from 'react';
// import React {Component} from 'react';

class Student extends Component {
	render() {
		return (
			<div>
				<h1>Student Details</h1>
				<p>Name: {this.props.name}</p>
				<p>Email: {this.props.email}</p>
				<p>Phone: {this.props.phone}</p>
			</div>
		);
	}
}

export default Student;

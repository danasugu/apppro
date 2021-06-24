// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import './E'

// import Post from './components/Post';
// import Teacher from './components/Teacher';
import Employee from './components/Employee';


class Employeep() extends Component {

	render(){
		return (
		<div className='App'>
			{		/* <Post />
			<Teacher name="Peter" email="peter@seser.com" phone="098769887000" /> */
			<Employee employees={this.state.employees} />}
		</div>
	);
	}
}

export default App;

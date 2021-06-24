// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';

// import Post from './components/Post';
// import Teacher from './components/Teacher';
import Employee from './components/Employee';


class Employeep() extends Component {
	state = {
		employee:[
			{id:1, name:'DS', email:'ds@ds.com', phone:'0987654321'},
			{id:2, name:'ASDDS', email:'asads@ds.com', phone:'12327654321'},
			{id:3, name:'GERDVC', email:'dsferdf@ds.com', phone:'7165231321'}
		]
	}
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

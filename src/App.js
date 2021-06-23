// import logo from './logo.svg';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';

// import Post from './components/Post';
// import Teacher from './components/Teacher';
import Employee from './components/Employee';


class App() extends Component {
	state = {
		
	}
	render() 
	{
		return (
		<div className='App'>
			{/* <Post />
			<Teacher name="Peter" email="peter@seser.com" phone="098769887000" /> */}
			<Employee />
		</div>
	);
	}
}

export default App;

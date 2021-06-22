// import logo from './logo.svg';
import './App.css';

import Post from './components/Post';
import Teacher from './components/Teacher';

function App() {
	return (
		<div className='App'>
			<Post />
			<Teacher name="Peter" email="e@e.com" phone="098769887000" />
		</div>
	);
}

export default App;

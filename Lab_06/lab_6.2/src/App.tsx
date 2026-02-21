import { Link } from 'react-router-dom';
import { courses } from './data';

function App() {
  return (
	<div className="App">
	  <h1>Lab 6.2 - Course List</h1>
	  <ul>
		{courses.map(course => (
		  <li key={course.id}>
			<Link to={`/course/${course.id}`}>
			  {course.title}
			</Link>
		  </li>
		))}
	  </ul>
	</div>
  );
}

export default App;
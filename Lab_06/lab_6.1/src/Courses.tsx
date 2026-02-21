interface Course {
	id: number;
	title: string;
}

const Courses = () => {
	const Courses: Course[] = [
		{ id: 1, title: 'Mathematics' },
		{ id: 2, title: 'Physics' },
		{ id: 3, title: 'Chemistry' },
	];

	return (
		<div>
			<h1>Courses</h1>
			<ul>
				{Courses.map(course => (
					<li key={course.id}>{course.title}</li>
				))}
			</ul>
		</div>
	)
}

export default Courses;
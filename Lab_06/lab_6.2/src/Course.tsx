import { useParams, useLoaderData } from 'react-router-dom';
import type { Course } from './data';

function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as { course: Course };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p><small>Route ID parameter: {id}</small></p>
    </div>
  );
}
export default CourseDetail;
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
	<div>
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/courses'>Courses</Link>
			<Link to='/about'>About</Link>
			<Link to='/error'>Error Page</Link>
		</nav>

		<main>
			<Outlet />
		</main>

		<footer>
			Student Portal 2026
		</footer>
	</div>
  );
}
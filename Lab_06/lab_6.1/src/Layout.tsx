import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
	<div>
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>Courses</Link>
			<Link to='/contact'>About</Link>
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
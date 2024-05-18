import { NavLink, Outlet } from "react-router-dom";


export function Template(){

	return (
		<div>
			<nav>
				<h1>Sam's Cool Journal </h1>

				<NavLink to="/">
					<button>Home</button>
				</NavLink>
				<NavLink to="/create">
					<button>Write a post</button>
				</NavLink>
			</nav>

			<br></br>

			<main>
				<Outlet />
			</main>

			<footer>
				Journal Footer with Copyright Info Blah Blah Blah 
			</footer>
		</div>
	)
}
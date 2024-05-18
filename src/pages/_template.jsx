import { NavLink, Outlet } from "react-router-dom";

export function Template() {

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

            <main>
                <Outlet />
            </main>

            <footer>
                Journal Footer with Copyright Info blah blah blah
            </footer>
        </div>
    )
}
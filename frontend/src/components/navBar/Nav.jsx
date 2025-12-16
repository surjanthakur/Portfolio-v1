import { NavLink } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  const routes = [
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="nav">
      {routes.map(route => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}

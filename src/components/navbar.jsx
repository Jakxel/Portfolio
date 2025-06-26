import { Link } from "react-router-dom";
import Theme from "./Theme";
import "../styles/navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Portfolio</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Theme />
    </nav>
  );
}

export default Navbar;

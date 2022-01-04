import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {

  return (
    <nav className="nav">
     
      <Link to="/" className="logo" >
        JIHUKIM
      </Link>
      <div className="navBtns">
        <Link to="/" className="projectsBtn">
          PROJECTS
        </Link>
        <Link to="/about" className="aboutBtn">
          ABOUT
        </Link>
        </div>
    </nav>

  );

}


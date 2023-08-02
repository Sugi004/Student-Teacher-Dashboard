import { Link } from "react-router-dom";
import { UseContext } from "./Context/UserContext";
import { useContext } from "react";
function SideBar() {
  let { profileImage } = useContext(UseContext);
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
          <div
            className="sidebar-brand-text mx-3"
            style={{ fontFamily: "sans-serif" }}
          >
            Haven University
          </div>
        </div>

        <li className="nav-item active">
          <Link to={`/dashboard/${profileImage}`} className="nav-link">
            <i className="fa-solid fa-home"></i>
            <span> Home </span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/courses" className="nav-link collapsed">
            <i className="fa-solid fa-briefcase"></i>
            <span> Courses</span>
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/students" className="nav-link collapsed">
            <i className="fa-solid fa-users"></i>
            <span> Students</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SideBar;

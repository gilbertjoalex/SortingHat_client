import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container ">
      <div id="linkNavbar">
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/characters">Characters</NavLink> */}
        {/* <NavLink to="/houses">Houses</NavLink> */}
      </div>
      <div className="navMiddle">
        <div style={{ color: "black" }}>Alex</div>
        <div style={{ color: "white" }}>Joaris</div>
      </div>
    </div>
  );
}
export { Navbar };

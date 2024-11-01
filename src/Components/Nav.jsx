import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="navbar">
        <h2 className="logo">
          <span>SAFE</span>TRACK
        </h2>
        <div className="nav-elements-container">
          <Link to="/" className="nav-element">
            {" "}
            HOME
          </Link>
          <Link to="/aboutus" className="nav-element">
            {" "}
            ABOUT US
          </Link>
          <Link to="/police" className="nav-element">
            {" "}
            POLICE
          </Link>
          <Link to="/contactus" className="nav-element">
            {" "}
            CONTACT US
          </Link>
        </div>
        <div className="sigining">
          <Link to="/signin">
            <button className="sign-button">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="sign-button">Sign Up</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

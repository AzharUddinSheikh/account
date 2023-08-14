import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "./common/Button";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MY APP
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={`/${isLoggedIn ? "logout" : "login"}`}
              >
                {`${isLoggedIn ? "Logout" : "Login"}`}
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

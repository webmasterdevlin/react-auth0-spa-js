// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="header-container">
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
        <div className="container">
        <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
          <Link to="/external-api">External API</Link>
      </div>
      )}
    </div>
  );
};


export default NavBar;

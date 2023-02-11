import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function NavBar() {
  return(
    <div className="navbar">
      <img className="surreal-estates-logo" src="/logo.png" alt="logo"></img>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to={"/"}>View Properties</Link>
        </li>
        <li className="navbar-links-item">  
          <Link to={"./AddProperty"}>Add Property</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
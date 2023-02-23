import { React } from "react";

import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login'
import "./nav-bar.css"

function NavBar( {onLogin, userID, onLogout} ) {
  return(
    <div className="navbar">
      <Link to={"/"}>
        <img className="surreal-estates-logo" src="/logo.png" alt="logo"></img>
      </Link>  
      <ul className="navbar-links">
        <li className="navbar-links-item">
          {userID
          ? <Link to={"./SavedProperties"}>Saved Properties</Link>
          : <></>
          }
        </li>
        <li className="navbar-links-item">
          <Link to={"/"}>View Properties</Link>
        </li>
        <li className="navbar-links-item">  
          <Link to={"./AddProperty"}>Add Property</Link>
        </li>
      </ul>
  
      {userID
        ? <button onClick={onLogout}>SignOut</button>
        : <FacebookLogin
            appId="1259851354623264"
            autoLoad={false}
            fields="name,email,picture"
            callback={onLogin} />    
      }
    </div>
  )
}

export default NavBar
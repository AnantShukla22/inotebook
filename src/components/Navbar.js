import React from 'react'
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {

    // it is user to highlight the path we are in using useLocation module
    var location=useLocation()
    
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
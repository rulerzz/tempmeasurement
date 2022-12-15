import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  if (localStorage.getItem("token") || props.isLoggedIn.isLoggedIn) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <Link to="/" className="navbar-brand"><b>ClimateApp</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
          <ul className="navbar-nav">
            <li className="nav-item active" key={0}>
              <Link to="/" className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item" key={1}>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item" key={2}>
              <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          </ul>
          </ul>
        </div>
      </nav>
    )
  }
  else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
        <Link to="/" className="navbar-brand">ClimateApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" key={0}>
              <Link to="/" className="nav-link" href="#">Home</Link>
            </li>
            <li className="nav-item" key={1}>
              <Link to="/signup" className="nav-link">Signup</Link>
            </li>
            <li className="nav-item" key={2}>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

}

export default Header;


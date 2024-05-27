import React from "react";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">
        <img className="logo" src={ logo }/>
        <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/register">Register</Link></span>
            <span><Link to="/profile">profile</Link></span>
        </nav>
    </div>
  )
}

export default Header;
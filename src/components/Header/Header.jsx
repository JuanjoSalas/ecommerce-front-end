import React from "react";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={ logo }/>
        <nav>
            <span><Link to="/">Home</Link></span>
        </nav>
    </div>
  )
}

export default Header;
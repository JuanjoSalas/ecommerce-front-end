import React from "react";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./Header.scss";

export const Header = () => {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <div className="header">
        <img className="logo-header" src={ logo }/>
            <span><Link to="/">Home</Link></span>
            {token ? (
            <>
              <span><Link to="/user/userInfo">Profile</Link></span>
              <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </>
      ) : (
            <span><Link to="/user/login">Login</Link></span>
         
          )}  
    </div>
  )
}

export default Header;
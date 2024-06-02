import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/Avatar.png"

import "./Profile.scss";

const Profile = () => {
  const { getLoggedUserInfo, user, token } = useContext(UserContext);
  
  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  if (!user) {
    return <div className="error">
    <div class="vader">
    <div class="shadow"></div>
    <div class="head"><div class="helmet"><span class="left"></span><span class="right"></span></div><div class="eyes"><span class="left"></span><span class="right"></span></div><span class="grill"><span class="left"></span><span class="center"></span><span class="right"></span></span><span class="mask"><span class="top"></span><span class="left"></span><span class="center"></span><span class="right"></span></span><span class="line"></span></div>
    <div class="torso"><span class="neck"><span class="left"></span><span class="center"></span><span class="right"></span><span class="bottom"></span></span><span class="belt"><span class="center"></span></span><div class="plate"><span class="red_top"></span><span class="red_center"></span><span class="red_bottom"></span><span class="blue"></span><span class="gray"></span></div></div>
    <div class="hand left"><span class="hand"></span></div>
    <div class="hand right animation-right"><span class="hand"></span></div>
    <div class="legs"><span class="left"></span><span class="right"></span></div>
    <div class="boots"><span class="left"></span><span class="right"></span></div>
    <div class="sword animation-left"><span class="handle"></span><span class="light"></span></div>
    </div>
    <p>El poder de la Fuerza me dice que la contraseña es incorrecta</p>
    <button class="btn" type="button">
  <strong><Link to="/user/login">Login</Link></strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
    </div>
  
  }
  return (
    <div className="content-profile">
      <img className="nav-img" src={ avatar }/>
      <p> {user.name}</p>
      <p> {user.email}</p>
    </div>
  );
};

export default Profile;
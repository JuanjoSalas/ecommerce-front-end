import React from 'react'
import banner from "../../assets/img/banner.png"
import "./Home.scss";

export const Home = () => {
  return (
    <div className='home'>
      <img className="banner" src={ banner }/>
    </div>
  )
}

export default Home
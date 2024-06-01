import React from "react";
import logo from "../../assets/img/logo.png"
import { Link,useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import "./Header.scss";
import { Badge } from 'antd';
import { ProductContext } from "../../context/ProductContext/ProductState";
import {ShoppingCartOutlined} from "@ant-design/icons"

export const Header = () => {
  const { token, logout } = useContext(UserContext);
  const {cart} = useContext(ProductContext)
  const navigate = useNavigate();

  useEffect(() => {
   localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  return (
    <div className="header">
            <span><Link to="/"><img className="nav-img" src={ logo }/></Link></span>
            {token ? (
            <>
              <span className="nav" ><Link to="/user/userInfo">Profile</Link></span>
             <Link to="/cart"> Cart <Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge></Link>
              <button class="Btn"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
          <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
          <div class="text">Logout</div>
          </button>
        </>
      ) : (
            <span><Link to="/user/login"><img className="login-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU9JREFUSEvllt1RwzAQhHc7IZVAOiGVAJUQKkmoJKGSI8vIjGPrZ8UokwduxuMHa+67W520Ju4UvBMXfwJHxAOA58tz1kPy2NtAFzgB3wE8LUAqYEtSbytscEQIdqhkFXTndt8DFnTZ6bIOyb5xWrbAEaH9lMROSPLmnrvgVwAvDhXAG0mtr8YtwHuSu1Hg1mDNORqw/Siwzu2plSx93zjHypJaCc0BswZL+WxwgteGzBqqSbUucIJLdu35Y0ryBUADZd9a3R2be2wt6+7YymosssDJHCSvZJ4kXl2XF6P4dN2qCq64UasnnWMNW3Hfi2DDjVpwQT9K12cWPAA6FVW0yhLYscBWx7/wnFWuwBHR40QufHV/58DyXfnvyDiS3M4T5sAyAx2bkbH6M8mBYyRxluvKQK7AA6c5V3sVLIlHy/xTxPI/zLoybyH9/wN/A6l7ex9R2t5sAAAAAElFTkSuQmCC"/></Link></span>
         
          )}  
    </div>
  )
}

export default Header;
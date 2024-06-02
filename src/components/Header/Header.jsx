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
              <span className="nav" ><Link to="/profile">Perfil</Link></span>
             <span className="nav" ><Link to="/cart"> Cesta <Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge></Link></span>
              <button class="comic-button"
            onClick={() => {
              logout();
              navigate("/");
            }}
          ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASpJREFUSEvtloEJwjAQRe9v4ii6iU6inUScREdxk29+SbSEKHfRWgQPCqUkffm5y8/BFgosxLXfApNcmZkeVwC41APDikkezWzrIj4GXc3sBOBQPoXAJAUUuDc2RX0UfDazdVIsBbsAXfMUQ1HdC74A2HjBJPkHv9zqfGy2JS8kS47n22qSKiKB7pD8Tem6AlCBucKd4+rYhNS1VuICNwxCrjO4pKWBLZd6Cc75lDloi7sDqSDqyR6wcur24NbqwmD9pFRxet1PfhpyqfBWT1efjEZmXuDfKa6ygKxeW6+jM9rj9DpsKXtWGK6qrpQr33sA44XwFQN5ch7nd64/uM5xxM2y57/VCCzW+qjKe2313vZIeqj1qc6421o/0t523x7VxC7Fn4AvBr4B3SbcH7E0YVkAAAAASUVORK5CYII="/></button>
        </>
      ) : (
            <span><Link to="/user/login"><img className="login-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU9JREFUSEvllt1RwzAQhHc7IZVAOiGVAJUQKkmoJKGSI8vIjGPrZ8UokwduxuMHa+67W520Ju4UvBMXfwJHxAOA58tz1kPy2NtAFzgB3wE8LUAqYEtSbytscEQIdqhkFXTndt8DFnTZ6bIOyb5xWrbAEaH9lMROSPLmnrvgVwAvDhXAG0mtr8YtwHuSu1Hg1mDNORqw/Siwzu2plSx93zjHypJaCc0BswZL+WxwgteGzBqqSbUucIJLdu35Y0ryBUADZd9a3R2be2wt6+7YymosssDJHCSvZJ4kXl2XF6P4dN2qCq64UasnnWMNW3Hfi2DDjVpwQT9K12cWPAA6FVW0yhLYscBWx7/wnFWuwBHR40QufHV/58DyXfnvyDiS3M4T5sAyAx2bkbH6M8mBYyRxluvKQK7AA6c5V3sVLIlHy/xTxPI/zLoybyH9/wN/A6l7ex9R2t5sAAAAAElFTkSuQmCC"/></Link></span>
         
          )}  
    </div>
  )
}

export default Header;
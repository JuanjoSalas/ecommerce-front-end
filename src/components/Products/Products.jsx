import React, { useContext, useEffect} from 'react';
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin } from "antd";
import "./Products.scss";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  if(!products.games){
    return <span class="loader"></span>
  }

  const product = products.games.map((product) => {
      return (
          <div classname="products">
          <div class="card" key={product.id}>
          <div class="card-img">
          <img className="img-product" src={product.image}/>
          </div>
          <div class="card-info">
            <p class="text-title">{product.name}</p>
            <div class="text-body">
            <span className="details">{product.players}<img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfhJREFUSEvFl8lNA0EQRb8D4EYAwJULR25AAqQAJMISCRACJMBy40YGEAA3EsAPTVnlmuplRrLckj2W3V2//q+lywttaS22hKs5wHuSTiXx/B5e+P86hUQvMCCXkm4qxnHicenQg3OmuL0F3AMYjeMA7K9qCtSAAX0ZJDUbGHwbDPOZPSykvxiethcHzkrsS8AY/HIeYwQGrThyjnAQFlbxXAkYprBg3S3fboNs55KOJD1L+kwkZb/lA+D7cU8GfO88LoE+DYZ+JR1I+mmAk3BrMY/AsIStyTTyVNL1oIJhcYa4x+VzZCR5BPZsSYwspkj8LmlH0oek4wZb+xkSOPC/IjAJhacjaYLxXUmHCVPY47xlO8estFagEdjLnMU2Ibb6CiAALSGrGR2BKQEOs0gEWLdW1mCsg8VKWLPlpfbAa/GooPuyY1u3Uh7Y194c4Nm92se4lNFZycTLY7LUm0gupE9zxUvt+zMlAOupy9j7ckovi1jHliy9l0LmWCnT1y6ZCOxZp819ggTxWq12Luz6ttnqYDU/fJWMyiy7nWJzZ5ypNoME3YOm+bKJQcC3zsmDACRijGyi5Gnjj5GlFE/cPW69evLoYwbnDHucbeZGa8r0DvhZKkuq2S2zp1JQwF4WDpLHD/Y9dmb9k+gy3NrUK3XLzuTf/wCOOoQfMD8qVQAAAABJRU5ErkJggg=="/></span>
            <span>+{product.age}<img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVJJREFUSEvtloENwjAMBN1JgE1gEmASYBJgEmAS2AR6KK7cqMFpWqlIEKlSwU7e/vjtVjLRqibClVLguYhsQtCn+v3RN4FS4KWIXALYSkSuf2CPgS6qoXEtItxjamFTu0fzLVxFyy8GpmCOXrSF9kO9b697LTAZ3M2hXia5+JadhSrAAhPNbkilJiKxCtjWV4T8Wjq2wKUyS7HwDIaG7lTGvwfcFIFTQRROTrvMppqKPmshRODUgtU5wOobB0FhIU/VvHvHioWjDgE2cwiHdS2CpWoVnF4e+7rAbLadK/6tjPC/zYiAsFlAu9cF5o5T2bU6UEgdXx2Tlg2CYHpl37HKich5ZvUB9FyiT3U06ws4/u9mUQKc2xY9v94Zewfm2r8T2I5ECmjMpcOns6qRD9r79AEwNJhmBnR9CBDd2OAogWwbRYw9hbIZ+QNnUzXUcTKqX1ztXB9BWlKSAAAAAElFTkSuQmCC"/></span>
            </div>
          </div>
          <div class="card-footer">
          <span class="text-title">{product.price}€</span>
          <div class="card-button">
            <svg onClick={()=>addCart(product)} class="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
            </svg>
          </div>
        </div>
        </div>
        </div>
      )
  })

return (
  <div className="container">
    {product}
  </div>
)
};

export default Products;
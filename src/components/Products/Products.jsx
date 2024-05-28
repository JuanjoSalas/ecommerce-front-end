import React, { useContext, useEffect} from 'react';
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin } from "antd";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  if(!products.games){
    return <Spin />;
  }
  const product = products.games.map((product) => {
      return (
        <div key={product.id}>
          <img src={product.image}/>
          <p>{product.name}</p>
          <p> {product.price}€</p>
          <span>{product.players}</span>
          <span>+{product.age}</span>
        </div>
      )
  })

return (
  <div>
    {product}
  </div>
)
};

export default Products;
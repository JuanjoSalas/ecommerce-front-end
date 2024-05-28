import React, { useContext, useEffect} from 'react';
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  if(!products.games){
    return <p>Cargando...</p>
  }
  const product = products.games.map((product) => {
      return (
        <div key={product.id}>
          <span>{product.name}</span>
          <span> {product.price}€</span>
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
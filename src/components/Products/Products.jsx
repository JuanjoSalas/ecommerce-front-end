import React, { useContext, useEffect} from 'react';
import { ProductContext } from "../../context/ProductContext/ProductState";

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
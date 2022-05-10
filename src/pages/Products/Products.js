import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="titel">Our Products</h1>
      <div className="our-products">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>

      {/* <div className="container">
        <h2 className="text-primary text-center mt-5">Our Products</h2>
        <div className="row">
          {products.map(product => (<Product></Product>
            
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Products;

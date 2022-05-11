import React, { useEffect, useState } from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import "./Products.css"

const Products = () => {
  const [products] = useProduct();

  return (
    <div>
      <h1 className="titel">Our Products</h1>
      <div className="our-products">
        {
        products.map((product) => (
          <Product key={product._id} product={product}></Product>
        )).slice(0, 6)
        }
      </div>
    </div>
  );
};

export default Products;

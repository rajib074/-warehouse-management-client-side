import React from "react";
import { Button } from "react-bootstrap";
import useProduct from "../../Hooks/useProduct";
import Product from "../../pages/Product/Product";

const OurProduct = () => {
  const [products] = useProduct();
  return (
    <>
      <h1 className="title">Our Products</h1>
      <Button className="btn btn-primary">Add Item</Button>
      <div className="our-products">
        {products
          .map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        }
      </div>
    </>
  );
};

export default OurProduct;

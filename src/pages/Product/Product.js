import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, img, content } = product;
  const navigate = useNavigate();
  const navigateToProductDetails = (_id) => {
    navigate(`/product/${_id}`);
  };
  return (
    <div className="product-aria">
      <img src={img} alt="" />
      <div className='p-3'>
        <h1>{name}</h1>
        <p>Details:{content.slice(0, 80)}</p>
        <Button
          onClick={() => navigateToProductDetails(_id)}
          variant="primary"
        >
          Manage
        </Button> 
      </div>
    </div>
  );
};

export default Product;

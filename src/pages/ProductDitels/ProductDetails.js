import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="img_aria">
              <img src={product.img} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="text_aria">
              <p>Id: {product._id}</p>
              <h2>{product.name}</h2>
              <p>Price:{product.price}</p>
              <p>Supplier:{product.supplier}</p>
              <p>Product Description:{product.content}</p>
              <p>
                Quantity: {product.quantity} || Sold: {product.sold}
              </p>
              <button className="btn btn-primary m-2">Add Quantity</button>
              <button className="btn btn-success">Delivered</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;

import React from "react";
import { Button, Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import Product from "../../pages/Product/Product";
import "./OurProduct.css"

const OurProduct = () => {
  const [products] = useProduct();
  return (
    <>
      <Container>
        <Row>
          <Col>
           
            <div className="add_item_btn">
            <h1 className="text-danger m-2">Our Products</h1>
            <Link to="/additem" className="btn btn-primary m-2">Add Item</Link>

            </div>
            <div className="our-products">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurProduct;

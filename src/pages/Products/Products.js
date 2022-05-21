import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import "./Products.css"

const Products = () => {
  const [products] = useProduct();

  return (
    <div>
      <h1 className="titel">Our Products</h1>
      <Container>
        <Row>
          {
            products.map((product) => (
              <Col md={4} key={product._id}>
                <Product product={product}></Product>
              </Col>
            )).slice(0, 6)
          }
          <Col className='text-center'>
            <Link to='/our-products' className='btn btn-primary btn-lg'>Manage Products</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;

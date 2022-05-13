import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useProduct from "../../Hooks/useProduct";
import Product from "../../pages/Product/Product";

const OurProduct = () => {
  const [products] = useProduct();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="title">Our Products</h1>
            <Button className="btn btn-primary">Add Item</Button>
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

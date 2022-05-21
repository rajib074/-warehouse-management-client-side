import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import "./Manage.css";

const Manage = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();

  const handelDelete = (id) => {
    const process = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (process) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setProducts(products.filter((product) => product._id !== id));
        });
    }
  };

  const navigateToProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Container>
        <Row>
          {products.map((product, index) => {
            return (
              <>
                <Col key={product._id} md={4}>
                  <div className="product-aria">
                    <img src={product.img} alt="" />
                    <div>
                      <h1>{product.name}</h1>
                      <p>Details:{product.content}</p>
                      <div className="d-flex gap-3 flex-wrap justify-content-center">
                        <Button
                          onClick={() => navigateToProductDetails(product._id)}
                          variant="primary"
                        >
                          Manage
                        </Button>
                        <Button
                          onClick={() => handelDelete(product._id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Manage;

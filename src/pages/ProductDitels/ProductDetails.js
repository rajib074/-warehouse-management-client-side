import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const {_id, name, img, content, supplier, price, quantity, sold} = product;

  useEffect(() => {
    const url = `https://rajib-enterprice.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  function removeOne(id) {
    let newQuantity = quantity - 1;
    if (newQuantity >= 0 ) {
        let newSold = parseInt(sold) + 1;
        const newObject = { ...product, quantity: newQuantity, sold: newSold };
        setProduct(newObject);
        fetch(`https://rajib-enterprice.herokuapp.com/update-quantity/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObject)
        })
    } else {
        toast.error('You dont have any Quantity');
    }
}
const addOne = (id) => {
    let newQuantity = parseInt(quantity) + 1;
    const newObject = { ...product, quantity: newQuantity };
    setProduct(newObject);
    fetch(`https://rajib-enterprice.herokuapp.com/update-quantity/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    toast.success('Added Quantity');
}

  return (
    <>
      <div className="container">
        <Row>
          <Col md={6}>
            <div className="img_aria">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="text_aria">
              <p>Id: {_id}</p>
              <h2>{name}</h2>
              <p>Price:{price}</p>
              <p>Supplier:{supplier}</p>
              <p>Description:{content}</p>
              <p>
                Quantity: {quantity} || Sold: {sold}
              </p>
              <button onClick={() => addOne(_id)} className="btn btn-primary m-2">Add Quantity</button>
              <button onClick={() => removeOne(_id)} className="btn btn-success">Delivered</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;

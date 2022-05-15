import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css"

const Product = ({product}) => {
    const {_id, name, img, des} = product;
    const navigate = useNavigate();
    const navigateToProductDetails = _id =>{
        navigate(`/product/${_id}`)
    }
    return (
        
        <div className='product-aria'>
            <img src={img} alt=""/>
            <div>
            <h1>{name}</h1>
            <p>ditels:{des}</p>
            <a onClick={() => navigateToProductDetails(_id)} className='boking'>Manage</a>
            </div>
            
        </div>
    );
};

export default Product;
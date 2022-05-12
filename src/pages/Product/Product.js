import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css"

const Product = ({product}) => {
    const {_id, name, img, des} = product;
    const navigate = useNavigate();
    const navigateToProductDitels = _id =>{
        navigate(`/product/${_id}`)
    }
    return (
        
        <div className='product-aria'>
            <img src={img} alt=""/>
            <div>
            <h1>this is servicw: {name}</h1>
            <p>ditels:{des}</p>
            <button onClick={() => navigateToProductDitels(_id)} className='boking'>Boking</button>
            </div>
            
        </div>
    );
};

export default Product;
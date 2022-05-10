import React from 'react';
import "./Product.css"

const Product = ({product}) => {
    const {name, img, des} = product;
    return (
        
        <div className='product-aria'>
            <img src={img} alt=""/>
            <div>
            <h1>this is servicw: {name}</h1>
            <p>ditels:{des}</p>
            <button className='boking'>Boking</button>
            </div>
            
        </div>
    );
};

export default Product;
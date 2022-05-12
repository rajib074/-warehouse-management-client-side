import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDitels = () => {
    const {productId} = useParams()
    return (
        <div>
            <h1>product ditels:{productId}</h1>
        </div>
    );
};

export default ProductDitels;
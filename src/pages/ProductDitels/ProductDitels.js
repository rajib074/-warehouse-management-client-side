import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDitels = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
            <h1>product ditels:{product.name}</h1>
        </div>
    );
};

export default ProductDitels;
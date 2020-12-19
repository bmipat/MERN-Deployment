import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const ProductStyle = {
        'width': '100px',
        'height': '30px',
        'borderRadius': 9,
        'borderWidth': 1,
        'borderColor': '#fff'
    }
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    
    const removeProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {            
                navigate('/products/');
            })
    }
    return (
        <div>
            <Link to={"/products/"}>
                <button style={ProductStyle}>Back</button>
            </Link>

            <h2>Product Detail</h2>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id +"/edit/"}>
                <button style={ProductStyle}>Edit</button>
            </Link>
            <button style={ProductStyle} onClick={(e) => { removeProduct(product._id) }}>Delete</button>
        </div>
    )
}

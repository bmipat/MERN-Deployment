import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Button from 'react-bootstrap/Button';

export default props => {
    const { removeFromDom } = props;
   
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
        <div className="container w-50">
            <Link to={"/products/"}>
                <Button variant="secondary" size="sm">Back</Button>
            </Link>

            <h2>Product Detail</h2>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id +"/edit/"}>
                <Button variant="primary" size="sm">Edit</Button>
            </Link>{' '}
            <Button variant="danger" size="sm" onClick={(e) => { removeProduct(product._id) }}>Delete</Button>
        </div>
    )
}

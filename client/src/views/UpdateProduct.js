import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

export default props => {
    const { id } = props;
    const [products, setProducts] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, products)
            .then(res => navigate('/products/' + id));
    }
    return (
        <div>            
            {loaded && <Form onSubmitProp={updateProduct} defaultTitle={products.title} defaultPrice={products.price} defaultDescription={products.description} />}
        </div>
    )
}

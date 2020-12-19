import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/all/')
            .then(res => {
                setProducts(res.data)
                setLoaded(true);
            });
    }, [products])
   
    const createProduct = product => {
        axios.post('http://localhost:8000/api/addproduct/', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
    }
    return (
        <div>
            <Form onSubmitProp={createProduct} defaultTitle="" defaultPrice="" defaultDescription=""/>            
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    )
}

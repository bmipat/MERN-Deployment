import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Button from 'react-bootstrap/Button';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title: title,
            price: price,
            description: description
        })
            .then(res => navigate('/products/'));
    }
    return (
        <div className="container w-50">
            
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label>Title </label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Price </label>
                    <input type="text" className="form-control" value={price} onChange={e => setPrice(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Description </label>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></input>
                </div>

                <Button variant="primary" size="sm" type="submit">Save</Button>{' '}
                <Link to={"/products/"}>
                    <Button variant="secondary" size="sm">Cancel</Button>
                </Link>
            </form>
        </div>
    )
}

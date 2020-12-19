import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { navigate } from '@reach/router';

export default props => {
    const { productId , setModalIsOpen} = props;
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                setModalIsOpen(false)
                navigate('/products/');                
            })
    }
    return (
        <Button variant="success" size="sm" onClick={deleteProduct}>
            Yes
        </Button>
    )
}

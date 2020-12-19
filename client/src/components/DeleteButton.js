import React from 'react'
import axios from 'axios';
export default props => {
    const { productId, successCallback } = props;
    const ProductStyle = {
        'margin-left': '50px',
        'width': '100px',
        'height': '30px',
        'borderRadius': 9,
        'borderWidth': 1,
        'borderColor': '#fff'
    }
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallback();
            })
    }
    return (
        <button style={ProductStyle} onClick={deleteProduct}>
            Delete
        </button>
    )
}

import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const ProductStyle = {
        'margin-left' : '50px',
        'width': '100px',
        'height': '30px',
        'borderRadius': 9,
        'borderWidth': 1,
        'borderColor': '#fff'
    }
    const tableStyle= {        
        'margin-left': 'auto',
        'margin-right': 'auto'
    }
    const removeFromDom = productId => {
        props.setProducts(props.products.filter(product => product._id != productId))
    }

    return (
        <div>
            <h2>All Products</h2>
            {props.products.map((product, i) => {
                return (
                    <div>
                        <table key={i} style={tableStyle}>
                            <tr>                            
                                <td>
                                    <Link to={"/products/" + product._id}>
                                        {product.title}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/" + product._id + "/edit"}>
                                        <button style={ProductStyle}>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                                </td>
                            </tr>
                        </table>                    
                    </div>
                    )
            })}
        </div>
    )
}

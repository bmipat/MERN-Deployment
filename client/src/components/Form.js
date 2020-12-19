import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Form = (props) =>{
    const { defaultTitle, defaultPrice, defaultDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(defaultTitle);
    const [price, setPrice] = useState(defaultPrice);
    const [description, setDescription] = useState(defaultDescription);

    const createProduct = e =>{
        e.preventDefault();       
        onSubmitProp({ title:title, price:price, description:description });
    }
    
    return (
        <div>
            <form onSubmit={createProduct}>
                <h1>Product Manager</h1>
                <div className="form-group">
                    <label>Title </label>
                    <input className="form-control" type="text" onChange={e => setTitle(e.target.value)}></input>                
                </div>
                <div className="form-group">
                    <label>Price </label>
                    <input className="form-control" type="text" onChange={e => setPrice(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Description </label>
                    <input className="form-control" type="text" onChange={e => setDescription(e.target.value)}></input>
                </div> 
                <div className="mb-2">               
                    <Button type="submit" variant="success" size="sm">Create</Button>
                </div>
            </form>            
        </div>
    )
}

export default Form;
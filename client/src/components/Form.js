import React, { useState } from "react";

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
                <label>Title </label>
                <input type="text" onChange={e => setTitle(e.target.value)}></input><br></br>
                <label>Price </label>
                <input type="text" onChange={e => setPrice(e.target.value)}></input><br></br>
                <label>Description </label>
                <input type="text" onChange={e => setDescription(e.target.value)}></input><br></br>
                <br></br>                
                <button type="submit">Create</button>
            </form>            
        </div>
    )
}

export default Form;
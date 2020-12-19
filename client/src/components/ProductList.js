import React, {useState} from 'react';
import { Link } from '@reach/router';
import Modal from 'react-modal';
import DeleteButton from './DeleteButton';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default props => {    

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [prodToDelete, setProdToDelete] = useState("");

    const setModalIsOpenToTrue = (prodId) => {
        setModalIsOpen(true)
        setProdToDelete(prodId)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const customStyles = {
        content : {
            width                 : '500px',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor       : '#E8E8E8'      
        }
    };

    return (
        <div>
            <h2>All Products</h2>
            
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <Button style={{ float: 'right' }} variant="secondary" onClick={setModalIsOpenToFalse}>x</Button> <br></br>               
                <p>Are you sure?</p>
                <DeleteButton productId={prodToDelete} setModalIsOpen={setModalIsOpen}/>
                <Button variant="danger" size="sm" onClick={setModalIsOpenToFalse}>No</Button>               
            </Modal>
                    <div>
                        <Table striped bordered hover>
                    <thead>
                        <tr>   
                            <th>#</th>                         
                            <th>Product Title</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                            <tbody>
                        {props.products.map((product, i) => {
                            return (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>
                                        <Link to={"/products/" + product._id}>
                                            {product.title}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={"/products/" + product._id + "/edit"}>
                                            <Button variant="primary" size="sm">Edit</Button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Button variant="danger" size="sm"
                                            onClick={() => setModalIsOpenToTrue(product._id)}>
                                            Delete
                                        </Button>                                        
                                    </td>
                                </tr>
                            )}
                        )}
                            </tbody>
                        </Table>                                            
                    </div>
        </div>
    )
}

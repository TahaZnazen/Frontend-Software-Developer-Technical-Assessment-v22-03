import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductForm from '../Update/ProductForm';

class AddFormContainer extends Component {
    render() {
        return (
            <>
                <Link to='/'>Home</Link>
                <ProductForm/>
            </>
        );
    }
}

export default AddFormContainer

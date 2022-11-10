import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom} = (props);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(response => {
                removeFromDom(productId)
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, i) => {
                return ( 
                <p key={i}>
                    <Link to={"/api/products/" + product._id}>{product.title}</Link>
                    <br/>
                    <button onClick={ (e) => {deleteProduct(product._id)}}>Delete</button>
                </p>
                )
            })}
        </div>
    )
}

export default ProductList;
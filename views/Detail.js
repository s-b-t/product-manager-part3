import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(response => setProduct(response.data))
            .catch((error => console.log(error)))
    }, [id]);

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <br/>
            <Link to={'/api/products/' + product._id + '/edit'}>Edit Product</Link>
        </div>
    )
}

export default Detail;
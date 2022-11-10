import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const Navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(response => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(response => {
                Navigate('/api/products')
                console.log(response)})
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br />
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={ (e) => {setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price: </label><br />
                    <input type="text"
                    name="price"
                    value={price}
                    onChange={ (e) => {setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description: </label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => {setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;
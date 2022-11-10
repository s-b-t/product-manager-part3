import React, {useState} from 'react';
import axios from 'axios';

const Product = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
            
        })
            .then(response => console.log("Response: ", response))
            .catch(error => console.log("Error: ", error))
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price: </label>
                    <input type="text" placeholder="$" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Product;
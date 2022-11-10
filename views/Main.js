import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(error => console.log(error));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            <ProductForm/>
            <br/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>} 
        </div>
    )
}

export default Main;


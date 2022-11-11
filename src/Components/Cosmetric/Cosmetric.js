import React from 'react';
import { addtoDb,removeFromDb } from '../../utilities/fakedb';
import './Cosmetric.css'

const Cosmetric = (props) => {
    // console.log(props);
    const {id,name,company,price}=props.product;
    const productHandle=(id)=>{
        addtoDb(id)
    }
    const productRemove =(id)=>{
        removeFromDb(id);
        // console.log("removed : ", id);
    }
    return (
        <div className='product-container'>
            <h1>Name: {name}</h1>
            <h2>Comapny: {company}</h2>
            <p>Id: {id}</p>
            <h5>Price: {price}$</h5>
            <button onClick={()=>productHandle(id)}>Add Product</button>
            <button onClick={()=>productRemove(id)} >Remove Product</button>

        </div>
    );
};

export default Cosmetric;
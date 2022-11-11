import React, { useEffect, useState } from 'react';
import { add, getTotal } from '../../utilities/calculator';
import Cosmetric from '../Cosmetric/Cosmetric';
// import add from '../../utilities/calculator';

const Cosmetrics = () => {
    // const cosmetrics = [
    //     {"id": 13, "price":444, "name": "kolom"},
    //     {"id": 16, "price":445, "name": "molom"},
    //     {"id": 11, "price":449, "name": "tolom"},
    //     {"id": 12, "price":446, "name": "jolom"},
    //     {"id": 15, "price":431, "name": "solom"},
    // ]

    const [product,setProduct]= useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then((data)=>setProduct(data))
    })
    

    // console.log(cosmetrics);
    const total = getTotal(product)

    return (
        <div>
            <h1>Welcome to my Cosmetrics</h1>
            <h2>Total Product: {product.length}</h2>
            <h3>Total Price: {total}</h3>
            <ul>
                {
                    product.map((pd)=><Cosmetric product={pd} key={pd.id}></Cosmetric>)
                }
            </ul>
        </div>
    );
};

export default Cosmetrics;
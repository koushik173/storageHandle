import React from 'react';
import { add, multiply } from '../../utilities/calculator';

const Shoes = () => {
    const f =4;
    const s =3;
    const res = multiply(f,s)
    const ress = add(f,s)
    return (
        <div>
            <h1>Total shoes: {res}</h1>
            <h2>Individual: {ress}</h2>
        </div>
    );
};

export default Shoes;
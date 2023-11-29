/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
const Cart = ({cartActor,remaining,totalCost}) => {
    //  console.log(cartActor)
    return (
        <div>
            <h4>Total actors : {cartActor.length}</h4>
            <h5>Remaining Cost : {remaining}</h5>
            <h5>Total Cost : {totalCost}</h5>
           {
            cartActor.map((data,id)=>(
              <ul key={id}>
                <li>{data.name}</li>
              </ul>
            ))
           }
        </div>
    );
};

export default Cart;
import React from 'react';

const Cart = ({cart, handelRemoveFromCart}) => {
    return (
        <div>
            <h2>order summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id} >{tshirt.name} <button onClick={()=>handelRemoveFromCart(tshirt._id)}>x</button></p> )
            }
        </div>
    );
};

export default Cart;
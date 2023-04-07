import React from 'react';
import './TShirt.css'

const Tshirt = ({tshirt, handleAdToCart}) => {
    const {picture, name, price}=tshirt;
    return (
        <div className='t-shirt'>
           <img src={picture}alt="" /> 
           <h4>{name}</h4>
           <p>Price: ${price}</p>
           <button onClick={()=>handleAdToCart(tshirt)}>Bay Now</button>
        </div>
    );
};

export default Tshirt;
import './Service.css'
import React from 'react';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='grid-layout'>
            <img className='img' src={img} alt="" />
            <h2 className='text-success fw-bold'>Food Item: {name}</h2>
            <h4 className='text-secondary'>Price: {price}</h4>
            <p><small>{description}</small></p>
            <button>Order Now</button>
            <br />
        </div>
    );
};

export default Service;
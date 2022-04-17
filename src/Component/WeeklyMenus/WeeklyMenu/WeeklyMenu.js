import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeeklyMenu = ({weeklyMenu}) => {
    const {name,id, img, description, price} = weeklyMenu;
    const navigate = useNavigate()
    const handleNavigateServiceDetail = id =>{
navigate(`/service/${id}`)
    }
    return (
        <div className='grid-layout'>
            <img className='img' src={img} alt="" />
            <h2 className='text-success fw-bold'>Food Item: {name}</h2>
            <h4 className='text-secondary'>Price: {price}</h4>
            <p><small>{description}</small></p>
            <button onClick={()=>handleNavigateServiceDetail(id)}>Order Now</button>
            <br />
        </div>
    );
};

export default WeeklyMenu;
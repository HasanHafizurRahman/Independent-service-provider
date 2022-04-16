import React from 'react';
import './Services.css'

const services =[
    {id:1, name: 'beef curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'},
    {id:2, name: 'camel curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'},
    {id:3, name: 'sheep curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'},
    {id:4, name: 'duck curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'},
    {id:5, name: 'chicken curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'},
    {id:6, name: 'mutton curry', price: '180bdt', description:'', img: 'http://www.whilemyboyfriendwassleeping.com/wp-content/uploads/2010/07/my-pugs-holistic-food-2.jpg'}
]

const Services = () => {
    return (
        <div>
            <h3>services: {services.length}</h3>
        </div>
    );
};

export default Services;
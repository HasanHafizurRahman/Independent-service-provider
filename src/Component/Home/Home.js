import './Home.css'
import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import WeeklyMenus from '../WeeklyMenus/WeeklyMenus';


const Home = () => {
    return (
        <div>
            <h1 className='text-success fw-bold'>Home Made Food Catering Service</h1>
            <Banner></Banner>
            <Services></Services>
            <WeeklyMenus></WeeklyMenus>
        </div>
    );
};

export default Home;
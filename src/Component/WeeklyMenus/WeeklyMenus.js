import React, { useEffect, useState } from 'react';
import WeeklyMenu from './WeeklyMenu/WeeklyMenu';

const WeeklyMenus = () => {

    const [weeklyMenus, setWeeklyMenus] = useState([]);
        useEffect(()=>{
            fetch('Menu.json')
            .then(res => res.json())
            .then(data => setWeeklyMenus(data))
        },[])


    return (
        <div id='features'>
            <h1 className='text-primary text-bold'> Special Items</h1>
            <div className="services-container">
            {
                weeklyMenus.map(weeklyMenu => <WeeklyMenu
                key={weeklyMenu.id}
                weeklyMenu={weeklyMenu}
                ></WeeklyMenu>)
            }
            <>
            <h3 className='text-primary fw-bold mt-5 p-5'>Our Outlets:
                
            <h5>Baridhara J Block,</h5>
                <h5>Baridhara DOH</h5>
                <h5>Mirpur DOH</h5>
                <h5>Banaani</h5>
                <h5>Baridhara DOH</h5>
                <h5>Bhatara Gulshan</h5>
            </h3>
                
                </>
            </div>
        </div>
    );
};

export default WeeklyMenus;
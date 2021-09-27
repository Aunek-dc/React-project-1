// Import Section
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Body.css';
// import Cart from '../../components/Cart'

const Body = () => {

    // useState using
    const [profiles, setProfiles] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect for loading all data
    useEffect(() => {
        fetch('./jsondata.json')
            .then(res => res.json())
            .then(data => setProfiles(data));
    }, []);
    const clickHandler = (profile) => {
        const newCart = [...cart, profile];
        setCart(newCart);
    }

    return (
        // Main body
        <div className='Body-container'>
            {/* Peoples profile container */}
            <div className="profile-container">
                {
                    profiles.map(profile => <Profile
                        key={profile.name}//key for remving warning
                        img={profile.img}
                        name={profile.name}
                        role={profile.role}
                        country={profile.country}
                        working_hour={profile.working_hour}
                        cost={profile.cost}
                        clickHandler={clickHandler}
                    >
                    </Profile>)
                }
            </div>
            {/* Side cart container call */}
            <div className="side-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;
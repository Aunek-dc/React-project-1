// Import Section
import React from 'react';
import headPhoto from '../../Data/Images/online-interview.png';
import './Header.css';

// Header part
const Header = () => {
    return (
        <div className='header-css'>
            {/* Logo */}
            <img src={headPhoto} alt="" />
            <h1>Arange a Meeting</h1>
            <p>List of famous Teacher's, Motivators as well as Influencers</p>
            <h3>Total Budget : 100M</h3>
        </div>
    );
};

export default Header;
// Import Section
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Profile.css';


const Profile = (props) => {
    // Used destructuring
    const { name, role, img, cost, country, working_hour } = props;
    // console.log(props)
    return (
        <div className='profile-set'>
            {/* Detailed cart section of persons */}
            <div>
                <img src={img} alt="" />
                <div className='underImage'>
                    <h3>Name : {name}</h3>
                    <h3>Role : {role}</h3>
                    <h3>Country: {country}</h3>
                    <h3>Cost : ${cost}</h3>
                    <h3>Working Hour : {working_hour}</h3>
                    <br />
                    <button onClick={() => props.clickHandler(props)}>{<FontAwesomeIcon icon={faShoppingCart} />}<h3>Add to cart</h3></button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
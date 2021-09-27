// Import Section
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

//Side cart for added persons
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0, name = '';
    for (const profile of cart) {
        total += profile.cost;
        if (!name.includes(profile.name)) name = name + profile.name + ', ';
    }
    return (
        <div>
            <div className='side-cart'>
                {/* Person's font awesome */}
                <span className='icon-users'>{<FontAwesomeIcon icon={faUsers} size='10x' />}</span>
                <h1 style={{ color: 'crimson', border: '2px solid black', backgroundColor: 'White' }}>Added Details-</h1>
                {/* Number of people and total cost */}
                <h2>People Included : {props.cart.length}</h2>
                <h2>Total Cost : ${total}</h2>
            </div>
            {/* People added names */}
            <div className='added-names'><h3><span>Added:</span><br /> {name}</h3></div>
        </div>
    );
};

export default Cart;
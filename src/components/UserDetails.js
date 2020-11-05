import React from 'react';
import '../App.css';

function UserDetails({user}){
    
    return(
        <div className='user-card'>
            <h1> {user.name} </h1>
            <p className='company'>Company: {user.company.name}</p>
            <p className='phone'>Phone: {user.phone}</p>
            <p className='city'>City: {user.address.city}</p>
        </div>
    );
}

export default UserDetails;
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Logout(){
    useEffect(() => {
        localStorage.removeItem('token');
    });

    return(
        <div>
            <h3> You have beedn Logged out !!! </h3>
            <Link to='/'> Login </Link>               
        </div>

    );
}

export default Logout;
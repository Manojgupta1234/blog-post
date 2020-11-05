import React, { useEffect,useState } from 'react';
import {Link, Redirect} from 'react-router-dom';

function Home(){
    const [isLoggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        let isLoggedIn = true;
        if(token == null){
            isLoggedIn = false;
        }
        setLoggedIn(isLoggedIn);
    },[]);

    if(!isLoggedIn){
        return <Redirect to='/'></Redirect>
    }
    return(
            <div>
            <nav>
                <ul>
                    <Link to="/users" className='link-style'>
                        <li>Users</li>
                    </Link>
                    <Link to="/posts" className='link-style'>
                        <li>Posts</li>
                    </Link>
                </ul>
            </nav>
            <h2><Link to='/logout'>Logout </Link></h2>
        </div>

    );
}

export default Home;
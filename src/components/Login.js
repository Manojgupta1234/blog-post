import React, {useState, useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import UserContext from './UserContext';

function Login(){
    const [user, setUser] = useState({userName:'', password:'', isLoggedIn:false});

    const users = useContext(UserContext);

    const onChange = (event) => {
        setUser({...user,
            [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(users.filter(userobj => userobj.username === user.password && userobj.email === user.userName).length >0 ){
            localStorage.setItem('token', 'sdfsdfsggsfsbetbsfsdf');
            setUser({...user, isLoggedIn : true});
        }else{
            alert("Incorrect username or password");
        }
    }

    useEffect( () => {
        const token = localStorage.getItem('token');
        let isLoggedIn = true;
        if(token == null){
            isLoggedIn = false;
        }
        setUser({...user, isLoggedIn});
        
    }, []);

    if(user.isLoggedIn){
        return <Redirect to='/home'></Redirect>
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' className='login-form' placeholder='Enter Email' name='userName' value={user.userName} onChange={onChange}/>
                <input type='password' className='login-form' placeholder='Enter Password' name='password' value={user.password} onChange={onChange}/>
                <input type='submit' className='login-form'></input> 
            </form>
        </div>
    );
}

export default Login;
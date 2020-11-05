import React, {useState, useEffect} from 'react';
import '../App.css';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';
import ShowPost from './ShowPost'
import Login from './Login';
import Logout from './Logout';
import UserContext from './UserContext';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){

    const [users, setUsers] = useState([]);

    useEffect( () => {
        (async function(){
            const data = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await data.json();
            setUsers(users);   
        })(); 
    }, []);

    return(
        <UserContext.Provider value={users}>
            <Router>
                <div>
                    <Switch>
                        <Route path='/' exact component={Login} />
                        <Route path='/home' component={Home} />
                        <Route path='/users' component={Users} />
                        <Route path='/posts' exact component={Posts} />
                        <Route path='/posts/:id' component={ShowPost} />
                        <Route path='/logout' exact component={Logout} />
                    </Switch>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
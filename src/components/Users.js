import React, {useState, useContext} from 'react';
import UserDetails from './UserDetails';
import GoBack from './GoBack';
import Filter from './Filter';
import UserContext from './UserContext';

function Users(){
    let userMap;
    const users = useContext(UserContext);

    const [filterValue, setFilter] = useState('');
    const handleFilter = (value) =>{
        setFilter(value);
    } 

    if(filterValue === ''){
       userMap = users.map(user => (
            <UserDetails key={user.id} user={user}></UserDetails>
        ));
    }else{
        userMap = users.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()))
            .map(user => (
            <UserDetails key={user.id} user={user}></UserDetails>
        ));
    }
    return(
        <div>
            <GoBack></GoBack>
            <Filter handleFilter={handleFilter} placeholder='Search with User Name'></Filter> 
            {userMap}
        </div>
    );
}

export default Users;
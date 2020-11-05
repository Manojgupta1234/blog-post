import React from 'react';

function Filter( props){

    const handleFilter = (event) => {
        props.handleFilter(event.target.value);
    };

    return(
        <div>
            <input type='text' placeholder={props.placeholder} className='filter' onChange={handleFilter} >
            </input>
        </div>
    );
}

export default Filter;
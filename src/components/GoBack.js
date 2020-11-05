import React from 'react';
import {useHistory} from 'react-router';

function GoBack(){
    const history = useHistory();
    const handleBackClick = () => {
        history.goBack();
    }

    return(
        <h3 className='back' onClick={handleBackClick}> Back</h3>
    );
}

export default GoBack;
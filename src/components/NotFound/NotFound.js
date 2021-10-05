import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            
                <h1> 404</h1>
                <h3>Not Found</h3>
                <h6>The resource requested could not be found on this server!</h6>
            
        </div>
    );
};

export default NotFound;
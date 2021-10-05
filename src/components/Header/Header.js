import React from 'react';
import Navbar from '../NavBar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className='body'>
                <Navbar/>
            <div className='container'>
                <h1 className='heading'>Life is like a tango fortunate are the few who can master it.</h1>
            </div>
        </div>
    );
};

export default Header;
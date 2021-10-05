import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';


const activeStyle= {
    fontWeight: "bold",
    color: "red",

  }
const Navbar = () => {
    return (
        <div>
            <div className='nav-container align-bottom container d-flex justify-content-between'>
                <div>
                    <h2><b>Digital Education</b></h2>
                </div>
                <div className='nav-container'>
                <ul className="d-flex align-items-end justify-content-end">
                    <Link className='items' to='/home' activeStyle={activeStyle}><li>Home</li></Link>
                    <Link className='items' to='/courses' activeStyle={activeStyle}><li>Courses</li></Link>
                    <Link className='items' to='/about' activeStyle={activeStyle}><li>About</li></Link>
                    <Link className='items' to='/student' activeStyle={activeStyle}><li>Student</li></Link>
                    <Link className='items' to='/contact' activeStyle={activeStyle}><li>Contact</li></Link>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
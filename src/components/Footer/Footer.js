import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container foot-container">

                <div className='foot-start'>
                    <h1>Digital Education</h1>
                    <p>
                        It’s your drive, your discipline, and your determination
                    </p>
                </div>

                <div className="foot-middle">
                    <h4>If you have any queries inbox us</h4>
                    <input type="text" className='input' placeholder='Your Email'/><br />
                    <button className='button'>Send</button>
                </div>

                <div className="foot-end">
                    <p>Contact Us</p>
                    <p>+02 8425260</p>
                    <address>
                        Address: 
                        <p>Apartment building Plot 11/A, Road 90, Block NE(L · 09613-191919)</p>
                    </address>
                </div>

            </div>
        </div>
    );
};

export default Footer;
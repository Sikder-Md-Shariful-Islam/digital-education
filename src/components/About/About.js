import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header/>
            <div className='container about-container'>
                <div className='about-img'>
                    <img src="https://essenceofqatar.com/wp-content/uploads/2020/06/best-about-us-pages.jpg" alt="about-us-img" />
                </div>
                <div>
                    <h1>About us</h1>
                    <p>
                    Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.
                    </p>
                    <p>
                    Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Student = () => {
    return (
        <div>
            <Header/>
            <h1 className='text-center pt-5 pb-5'>If you wanted to see our students details then please <strong className='text-primary'>Sign In</strong> first!!</h1>
            <Footer/>
        </div>
    );
};

export default Student;
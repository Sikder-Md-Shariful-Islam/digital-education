import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Courses.css';


const Courses = () => {
    const [courses, setCourses] = useState([]);
useEffect( ()=> {
    fetch('./coursesdb.JSON')
    .then(res => res.json())
    .then(data => setCourses(data));
}, []);

    return (
        <div>
            <Header/>
            <div className="course-container container">
                {
                    courses.map(course => <Course
                        key= {course.id}
                        course= {course}
                    ></Course>)
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;
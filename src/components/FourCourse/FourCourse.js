import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBook, faStar } from '@fortawesome/free-solid-svg-icons'
import { ToggleButton as Button } from 'react-bootstrap';
import './FourCourse.css';

const FourCourse = (props) => {
    
    const {img, name, lesson, instructor, price, rating, rated, teacher} = props.fourCourse;

    return (
        <div className= 'container'>
            <div className='card-container'>
                <div className='main'>

                    {/* image */}
                    <div className="card-img">
                        <img src= {img} alt="thumbnail" />
                    </div>
                    
                    {/* body */}
                    <div className="card-body">
                        <div className="lesson-rating d-flex justify-content-between">
                            <p><FontAwesomeIcon icon={faBook} /> {lesson} Lesson</p>
                            <p><FontAwesomeIcon icon={faStar} className="star"/> {rating} ({rated})</p>
                        </div>
                        <h4>{name}</h4>
                        <div className="instructor">
                            <img src={teacher} alt="teacher-img" />
                            <p>{instructor}</p>
                        </div>
                        <hr />

                        {/* footer */}
                        <div className='price d-flex justify-content-between'>
                            <h3>${price}</h3>
                            <Button className=''> <FontAwesomeIcon icon={faShoppingCart} /> Purchase</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourCourse;
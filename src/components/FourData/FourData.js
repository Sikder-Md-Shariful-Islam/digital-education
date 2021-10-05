import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import FourCourse from '../FourCourse/FourCourse';
import './FourData.css';

const FourData = () => {
    const [fourDatas, setFourDatas] = useState([]);
    useEffect( () => {
        fetch('./fourdb.JSON')
        .then(res => res.json())
        .then(data => setFourDatas(data))
    }, []);

    return (
        <div>
            <div className="FourData-container container">
                {
                    fourDatas.map(fourData => <FourCourse
                        key={fourData.id}
                        fourCourse={fourData}
                    >
                    </FourCourse>)
                }
            </div>
            <Button> See More from Courses</Button>
        </div>
    );
};

export default FourData;
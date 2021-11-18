import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayClass from './DisplayClass';

const LiveClass = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    let date = new Date();
    useEffect(() => {
        fetch(`https://limitless-eyrie-66726.herokuapp.com/courses`)
            .then(res => res.json())
            .then(data => {
                const reamingData = data.filter(course => new Date(course.startDate) <= date && new Date(course.EndDate >= date));
                setCourses(reamingData);
               
            })
    }, []);
    return (
        <div style={{minHeight:'200px'}} className='my-5'>

                <h4 className='mb-3'>Today's Live Class</h4>
                <Row className='g-5'>
                    {
                        courses.map(course => <DisplayClass key={course._id} course={course}></DisplayClass>)
                    }
                </Row>

        </div>
    );
};


export default LiveClass;
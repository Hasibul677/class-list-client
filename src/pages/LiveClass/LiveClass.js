import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayClass from './DisplayClass';

const LiveClass = () => {
    const [courses, setCourses] = useState([]);
    const date = new Date();
    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => {
                const reamingData = data.filter(course => new Date(course.startDate) <= date && new Date(course.EndDate >= date));
                setCourses(reamingData);
            })
    }, []);
    return (
        <div className='my-5'>
            <Container>
                <h1>Today's Live Class</h1>
                <Row>
                    {
                        courses.map(course => <DisplayClass key={course._id} course={course}></DisplayClass>)
                    }
                </Row>
            </Container>
        </div>
    );
};


export default LiveClass;
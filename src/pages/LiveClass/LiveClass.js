import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { processDate, processTime } from '../../Utilities/Utilities';

const LiveClass = () => {
    const [courses, setCourses] = useState([]);
    const date = new Date();
    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => {
                const reamingData = data.filter(course=> new Date(course.startDate) <= date && new Date(course.EndDate >= date));
                setCourses(reamingData);
            })
    }, []);
    return (
        <div className='my-5'>
           <Container>
               <h1>Today's Live Class</h1>
               <Row>
                   {
                       courses.map(course=> <DisplayData key={course._id} course={course}></DisplayData>)
                   }
               </Row>
           </Container>
        </div>
    );
};

function DisplayData({course}){
    const {_id, courseId, subjects, classTime, fees, classes, classduration, status} = course;
    return(
        <Col xm={12} md={6} lg={4}>
        <Card className='p-2' style={{
            borderLeft:'5px solid red', 
            borderTopLeftRadius:'10px',
            borderBottomLeftRadius:'10px'}}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3>{subjects}, Class-{classes}</h3>
                    <p>Batch: {courseId}</p>
                </div>
                <div>
                    <button className='rounded text-white' style={{fontSize:'15px', backgroundColor:'goldenrod'}}>{status}</button>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h6>{processTime(classTime)} to {processTime(classduration)}</h6>
                    <p>Batch: {courseId}</p>
                </div>
                <div>
                    <button className='rounded bg-danger text-white' style={{fontSize:'15px'}}>join class</button>
                </div>
            </div>

        </Card>
        </Col>
    )
}

export default LiveClass;
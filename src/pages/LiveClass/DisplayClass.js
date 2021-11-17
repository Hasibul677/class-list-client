import React, { useEffect, useState } from 'react';
import { Card, Col} from 'react-bootstrap';
import { processTime } from '../../Utilities/Utilities';
import Countdown from "react-countdown";

const DisplayClass = ({course}) => {
    const { _id, courseId, subjects, classTime, fees, classes, classduration, status } = course;
  
    let time1 = `${processTime(classTime)}:00`
    let array1 = time1.split(":");
    let seconds1 = (parseInt(array1[0], 10) * 60 * 60) + (parseInt(array1[1], 10) * 60) + parseInt(array1[2], 10);

    let currentTime = new Date();
    let countDown = currentTime.toLocaleTimeString();
    let time2 = `${processTime(countDown)}:00`
    let array2 = time2.split(":");
    let seconds2 = (parseInt(array2[0], 10) * 60 * 60) + (parseInt(array2[1], 10) * 60) + parseInt(array2[2], 10);

    let mainTime = seconds1 - seconds2
    return (
        <Col xm={12} md={6} lg={4}>
            <Card className='p-2' style={{
                borderLeft: '5px solid red',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px'
            }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h3>{subjects}, Class-{classes}</h3>
                        <p>Batch: {courseId}</p>
                    </div>
                    <div>
                        <button className='rounded text-white' style={{ fontSize: '15px', backgroundColor: 'goldenrod' }}>{status}</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h6>{processTime(classTime)} to {processTime(classduration)}</h6>
                        <Countdown date={Date.now() + mainTime*1000} renderer={renderer} />

                    </div>
                    <div>
                        <button className='rounded bg-danger text-white' style={{ fontSize: '15px' }}>join class</button>
                    </div>
                </div>

            </Card>
        </Col>
    )
};

// Random component
const Completionist = () => <span>Class Already Started!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours} hours: {minutes} minutes: {seconds} seconds
      </span>
    );
  }
};

export default DisplayClass;
import React, { useEffect, useState } from 'react';
import DisplayClass from './DisplayClass';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

const LiveClass = () => {
    const [courses, setCourses] = useState([]);
    let date = new Date();
    let countDown = date.toLocaleTimeString('en-GB');
    console.log(countDown);

    useEffect(() => {
        fetch(`https://limitless-eyrie-66726.herokuapp.com/courses`)
            .then(res => res.json())
            .then(data => {
                const remainingData = data.filter(course => new Date(course.startDate) <= date && new Date(course.EndDate >= date && countDown <= course.classduration ));
                setCourses(remainingData);

            })
    }, []);
    return (
        <div style={{ minHeight: '200px' }} className='my-5'>

            <h4 className='mb-3'>Today's Live Class</h4>

            
            <ScrollingCarousel className='crbutton'>
                    {
                    courses.map(course => <DisplayClass key={course._id} course={course}></DisplayClass>)
                    } 
                </ScrollingCarousel>      
        </div>
    );
};




export default LiveClass;
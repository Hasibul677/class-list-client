
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { processTime } from '../../Utilities/Utilities';
import MyVerticallyCenteredModal from '../Modal/Modal';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`http://localhost:5000/courses/${id}`)
                        .then(res => {
                            const reamingData = courses.filter(course => course._id !== id);
                            setCourses(reamingData);
                        })
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div className='container-fluid text-center'>

            <Row>
                <Table style={{ fontSize: '13px' }}>
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Course ID</th>
                            <th>Curriculum</th>
                            <th>Class</th>
                            <th>Subjects</th>
                            <th>No of Participants</th>
                            <th>Vacant Seats</th>
                            <th>Course Start Date</th>
                            <th>Course End Date</th>
                            <th>Class Time</th>
                            <th>Feess in BD</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {
                        courses.map((course, index) => <DisplayData serial={course.serial = index + 1} key={course._id} course={course} handleDelete={handleDelete}></DisplayData>)
                    }

                </Table>
            </Row>

        </div>

    );
};

function DisplayData({ course, serial, handleDelete }) {
    const { _id, courseId, medium, subjects, participants, seats, startDate, EndDate, classTime, fees, classes } = course;
    const [modalShow, setModalShow] = React.useState(false);
    const handleView = () => {
        setModalShow(true)
    }
    return (

        <tbody>
            <tr>
                <td>{serial}</td>
                <td>{courseId}</td>
                <td>{medium}<br />(Cambridge)</td>
                <td>Class-{classes}</td>
                <td>{subjects}</td>
                <td>{participants}</td>
                <td>{seats}</td>
                <td>{startDate}</td>
                <td>{EndDate}</td>
                <td>{processTime(classTime)}</td>
                <td>{fees}/Per Class</td>
                <td>
                    <button onClick={handleView} className='me-2 border-0'><i className="fs-5 text-warning fas fa-eye"></i></button>
                    <Link to={`/update/${_id}`}><button className='me-2 border-0'><i className="fs-5 text-info fas fa-edit"></i></button></Link>
                    <button onClick={() => handleDelete(_id)} className='me-2 border-0'><i className="fs-5 text-danger far fa-trash-alt"></i></button>
                    <button className='bg-danger text-white'>join class</button>
                </td>
            </tr>
            <MyVerticallyCenteredModal
                id={_id}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </tbody>

    )
}

export default Course;
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

const MyVerticallyCenteredModal = (props) => {
  const [courses, setCourses] = useState({});
  const {courseId, medium, subjects, participants, seats, startDate, EndDate, classTime, fees, classes } = courses;

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${props.id}`)
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{courseId}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
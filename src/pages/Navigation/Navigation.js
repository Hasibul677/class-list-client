import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='mt-4'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/class">CLASSES</NavLink>
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/subject">SUBJECTS</NavLink>
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/tutor">TUTOR</NavLink>
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/students">STUDENTS</NavLink>
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/parents">PARENTS</NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink style={{textDecoration:'none', marginRight:'15px', fontWeight:700, color:'#336BFF'}} to="/login">LOGIN</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
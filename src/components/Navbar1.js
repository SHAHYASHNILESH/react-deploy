import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FiSearch} from "react-icons/fi"
// import { Link } from "react-router-dom";


const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{marginBottom:150}}>
      <Container fluid className="fw-bold">
        <Navbar.Brand href="#" className="display-1 fw-bold" style={{fontSize:28,fontFamily:'Times new roman'}}>ATG.WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for your favourite groups in ATG"
              className="me-1 justify-content-center"
              aria-label="Search"
              
            />
            <Button variant="success" className="me-5">Search</Button>
          </Form>
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Create Account.It's free!"
              menuVariant="dark"
              
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            
            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbar1;

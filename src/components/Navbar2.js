import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import {MdGroupAdd} from "react-icons/md";

const Navbar2 = () => {
  return (
    <Navbar bg="light" expand="lg" style={{fontSize:22,fontFamily:'Times new roman',marginBottom:100}} className="mb-5">
      <Container fluid className="fw-bold">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link href="#action1" className="mx-3" active>
              All Posts(32)
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Article
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Event
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Education
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Job
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      <Dropdown className="m-5">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Write a Post
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
     </Dropdown>
     <Button variant="primary" className="ms-3"><MdGroupAdd/> Join Group</Button>
      </Container>
    </Navbar>
  );
};
export default Navbar2;

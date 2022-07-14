import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  NavDropdown,
  DropdownButton,
  Col,
  Row,
  Container,
} from "react-bootstrap";

import { FaShareAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { SiBandlab } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { IoBag } from "react-icons/io5";
import { BsPenFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";

const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "30rem" }}>
            <Card.Img
              variant="top"
              src="https://c1.wallpaperflare.com/preview/880/231/618/tree-mist-fog-cloudy.jpg"
              height={250}
            />
            <Card.Body>
              <p className="text-start">
                <BsFillPenFill /> Article
              </p>
              <Card.Title className="text-start fw-bold">
                What if famous brands had regular fonts? Meet RegulaBrands!
                <br />
                <BsThreeDots />
              </Card.Title>
              <Card.Text className="text-start">
                I've worked in UX for the better part of a decade. From now on,I
                plan to rei..
              </Card.Text>
              <Card.Text className="text-start">
                <CgProfile /> Sarthak Kamra
              </Card.Text>
              <Card.Text className="text-end">
                <MdOutlineRemoveRedEye /> 1.4kviews <FaShareAlt />
              </Card.Text>
            </Card.Body>

            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                height={250}
              />
              <Card.Body>
                <p className="text-start">
                  <SiBandlab /> Education
                </p>
                <Card.Title className="text-start fw-bold">
                  Tax Benfits for Investment under National Pension Scheme
                  launched by Government
                  <br />
                  <BsThreeDots />
                </Card.Title>
                <Card.Text className="text-start">
                  I've worked in UX for the better part of a decade. From now
                  on,I plan to rei..
                </Card.Text>
                <Card.Text className="text-start">
                  <CgProfile /> Sarah West
                </Card.Text>
                <Card.Text className="text-end">
                  <MdOutlineRemoveRedEye /> 1.4kviews <FaShareAlt />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1527937444527-466f6fd54936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwZG9vcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                height={250}
              />
              <Card.Body>
                <p className="text-start">
                  <GrNotes /> Meetup
                </p>
                <Card.Title className="text-start fw-bold">
                  Finance & Investments Elite Social Mixer @Lujiazui
                  <NavDropdown title="..." id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Edit</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Report
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Option 3
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Card.Title>
                <Card.Text className="text-start">
                  <BsCalendarDate /> Fri,12 Oct,2018 <GoLocation />
                  Ahmedabad,India
                </Card.Text>
                <Button variant="danger" className="text-start">
                  Visit Website
                </Button>
                <Card.Text className="text-start">
                  <CgProfile /> Ronal Jones
                </Card.Text>
                <Card.Text className="text-end">
                  <MdOutlineRemoveRedEye /> 1.4kviews <FaShareAlt />
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "30rem" }} className="text-start">
              <Card.Body>
                <Card.Title>
                  <IoBag /> Job
                </Card.Title>
                <Card.Subtitle className="mb-2 fw-bold">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  <BsCalendarDate /> Innovaccer Analytics Private Ltd.{" "}
                  <GoLocation /> Noida,India
                </Card.Text>
                <Button
                  variant="danger"
                  className=" justify-content-center text-center"
                >
                  Apply on Timesjobs
                </Button>
                <Card.Text className="text-start">
                  <CgProfile /> Joseph Gray
                </Card.Text>
                <Card.Text className="text-end">
                  <MdOutlineRemoveRedEye /> 1.4kviews <FaShareAlt />
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </Col>
        <Col>
          <p className="text-dark fw-bold text-start">
            <GoLocation /> Noida,India <BsPenFill />
          </p>
          <p className="text-muted text-start">
            <CgDanger /> Your location will help us serve better and extend a
            personalised experience
          </p>
          <p className="text-start">
            <BiLike /> RECOMMNEDED GROUPS
            <p>
              <CgProfile /> Leisure <RiUserFollowLine />
            </p>
            <p>
              <CgProfile /> Activism <RiUserFollowLine />
            </p>
            <p>
              <CgProfile /> MBA <RiUserFollowLine />
            </p>
            <p>
              <CgProfile /> Philosophy <RiUserFollowLine />
            </p>
            <p className="text-end text-primary">See more..</p>
          </p>
         
        </Col>
      </Row>
    </Container>
  );
};
export default Cards;

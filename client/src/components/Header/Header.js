import React from "react";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
  Image,
  Carousel,
  FormControl,
  Form,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import back from "../../images/background.jpg";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="header">
            free shipping
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="nav-items"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="main-nav">
              <Nav.Link href="#login">LOGIN</Nav.Link>
              <Nav.Link href="#cart">CART</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                SHOP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

import React from "react";
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion } from 'react-bootstrap';



const Home = () => {
    return (

        <Navbar expand="lg">
        <Navbar.Brand href="index.html">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: 'auto' }}
      navbarScroll
    >
      <Nav.Link href="index.html">Home</Nav.Link>
      <Nav.Link href="#action2">News</Nav.Link>
      <Nav.Link href="#action3">Contact</Nav.Link>
    </Nav>

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Home;
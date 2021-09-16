import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';



const Home = () => {
    return (

        <Navbar expand="lg">
        <Navbar.Brand className="logo" href="index.html">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: 'auto' }}
      navbarScroll
    >
      <Nav.Link className="current" href="index.html">Home</Nav.Link>
      <Nav.Link href="#action2">News</Nav.Link>
      <Nav.Link href="#action3">Contact</Nav.Link>
    </Nav>

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        
      />
      <Button>Go</Button>
    </Form>

  </Navbar.Collapse>
</Navbar>
    );
};

export default Home;
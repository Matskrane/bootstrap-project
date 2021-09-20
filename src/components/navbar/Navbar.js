import React from "react";
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";




const TopNav = () => {
    return (
      <div className="wrapper-background">

      <Navbar expand="lg">
        <Link to="/">
      <Navbar.Brand className="logo">The YAY Company</Navbar.Brand>
        </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: 'auto' }}
        navbarScroll
      >

      <Nav.Link href="/" className="current">Home</Nav.Link>

      <Nav.Link href="/news">News</Nav.Link>

      <Nav.Link href="/contact">Contact</Nav.Link>

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
</div>
    );
};

export default TopNav;
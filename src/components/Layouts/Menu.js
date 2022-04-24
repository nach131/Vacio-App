import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

function Menu () {
  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="/">prueba</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0 navbar-dark bg-dark"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Form1">Form1</Nav.Link>
              <Nav.Link as={Link} to="/Form2">Form2</Nav.Link>
              <Nav.Link as={Link} to="/Form3">Form3</Nav.Link>
              <Nav.Link as={Link} to="/Datos">Datos</Nav.Link>
              <Nav.Link as={Link} to="/Frutas">Frutas</Nav.Link>
              <Nav.Link as={Link} to="/FormAddArray">FormAddArray</Nav.Link>
              <Nav.Link as={Link} to="/FormAddDelToArray">FormAddDelToArray</Nav.Link>
              <Nav.Link as={Link} to="/CryptosFabChecked">CryptosFabChecked</Nav.Link>
              <Nav.Link as={Link} to="/CryptosFabCheckedAddDelArray">CryptosFabCheckedAddDelArray</Nav.Link>
              {/* <NavDropdown title="Smart Contracts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/smart">Add Smart Contracts</NavDropdown.Item>
              <NavDropdown.Item href="/smart_list">List Smart Contracts</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

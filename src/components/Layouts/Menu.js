import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Menu () {

  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">Filtering & Animation</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/about">about</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

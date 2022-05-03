import React from 'react'
import { Link } from "react-router-dom";

import { Navbar, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

function Menu () {

  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand link to="/">Isotope filter Animate</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/uno"
              >
                Uno
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dos"
              >
                Dos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/tres"
              >
                Tres
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

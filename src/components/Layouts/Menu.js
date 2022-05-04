import React, { useRef, useEffect, useState } from 'react'
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
          <Navbar.Brand as={Link} to="/">Isotope filter Animate</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/isotope_origin">
                IsotopeOrigin
              </Nav.Link>
              <Nav.Link as={Link} to="/IsotopeOriginNach" >
                IsotopeOriginNach
              </Nav.Link>
              <Nav.Link as={Link} to="/isotope_nach" >
                IsotopeNach
              </Nav.Link>
              <Nav.Link as={Link} to="/tres">
                Tres
              </Nav.Link>
              <Nav.Link as={Link} to="/children">
                Children
              </Nav.Link>
              <Nav.Link as={Link} to="/isotope_dos" >
                IsotopeDos
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

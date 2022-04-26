import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Button, DropdownButton } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import 'flag-icon-css/css/flag-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { FaThumbsUp } from 'react-icons/fa';
import { FaGlobeAmericas } from "react-icons/fa";

function Menu () {

  const language = [
    {
      code: 'fr',
      name: 'Français',
      contry_code: 'fr'
    },
    {
      code: 'en',
      name: 'English',
      contry_code: 'gb'
    },
    {
      code: 'sp',
      name: 'España',
      contry_code: 'es'
    }
  ]

  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">prueba</Navbar.Brand>
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



              <NavDropdown title={<FaGlobeAmericas size="20" />} id="navbarScrollingDropdown">
                {language.map(({ code, name, contry_code }) => (
                  <NavDropdown.Item key={code}>
                    {/* <span className="flag-icon flag-icon-es mx-2" ></span> */}
                    <span className={`flag-icon flag-icon-${contry_code} mx-2`} ></span>
                    {name}
                  </NavDropdown.Item>
                ))}

              </NavDropdown>
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

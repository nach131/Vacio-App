import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Menu () {
  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar.Brand href="/">prueba</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 navbar-light bg-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/scala">Scala</Nav.Link>
            {/* <Nav.Link href="/cotizacion">Cotización</Nav.Link> */}
            <Nav.Link href="/historia">Historial</Nav.Link>
            <Nav.Link href="/control">Control</Nav.Link>
            <Nav.Link href="/exchange">Exchange</Nav.Link>
            <NavDropdown title="Smart Contracts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/smart">Add Smart Contracts</NavDropdown.Item>
              <NavDropdown.Item href="/smart_list">List Smart Contracts</NavDropdown.Item>
              {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/smartcontrol">Pruebas</Nav.Link>
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
      </Navbar>
    </>
  )
}

export default Menu

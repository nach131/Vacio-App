import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import Tres from '../Pages/Tres';


function Menu () {

  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Navbar.Brand href="/">prueba Mint NFTs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 navbar-dark bg-dark"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/uno">Uno</Nav.Link>
            <Nav.Link href="/dos">Dos</Nav.Link>
            <Nav.Link href="/tres">Tres</Nav.Link>
            {/* <NavDropdown title="Smart Contracts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/smart">Add Smart Contracts</NavDropdown.Item>
              <NavDropdown.Item href="/smart_list">List Smart Contracts</NavDropdown.Item>
              <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown> */}
            <Tres />
          </Nav>

          {/* <Button variant="outline-danger" onClick={accountSubmitRequest}>requestAccount</Button>
          <Button variant="outline-success" onClick={() => requestAccount()}>requestAccount</Button>
          <Button variant="outline-info" onClick={() => connectWallet()}>Conectar wallet</Button> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu

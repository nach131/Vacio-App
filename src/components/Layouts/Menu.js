import React, { useState } from 'react'

import { Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link, animateScroll as scroller } from 'react-scroll'
import Nav from 'react-bootstrap/Nav'

import 'flag-icon-css/css/flag-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function Menu () {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 780) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  // cuando haya scrollin se ejecutara la funcion
  window.addEventListener('scroll', changeColor)



  const tomate = () => {
    const options = {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500
    }
    scroller.scrollTo('CryptosFabChecked', options);
    console.log("tomate")
  }

  return (
    <>
      <Navbar
        bg={color ? 'light' : ''}
        variant={color ? 'light' : 'dark'}
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">Scrolling & navBar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav

              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link >
                <Link
                  activeClass='active'
                  to='uno'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Uno
                </Link>
              </Nav.Link>

              <Nav.Link >
                <Link
                  activeClass='active'
                  to='dos'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Dos
                </Link>
              </Nav.Link>

              <Nav.Link >
                <Link
                  activeClass='active'
                  to='tres'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Tres
                </Link>
              </Nav.Link>




            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

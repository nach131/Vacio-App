import React, { useRef, useEffect, useState } from 'react'

import { Navbar, Container } from 'react-bootstrap'
import { Link, animateScroll as scroller } from 'react-scroll'
import Nav from 'react-bootstrap/Nav'

import 'flag-icon-css/css/flag-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function Menu () {

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  const [color, setColor] = useState(false)

  const changeColor = () => {
    // console.log(window.scrollY) // 584
    if (window.scrollY >= 780) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  // cuando haya scrollin se ejecutara la funcion
  window.addEventListener('scroll', changeColor)


  // para subir hacia arriba
  const ScrollToTop = () => {
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
        ref={targetRef}
        bg={color ? 'secondary' : 'primary'}
        variant={color ? 'light' : 'dark'}
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

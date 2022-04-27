import React, { useEffect } from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Button, DropdownButton } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

import 'flag-icon-css/css/flag-icons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { FaGlobeAmericas } from "react-icons/fa";

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
    name: 'Español',
    contry_code: 'es'
  },
  {
    code: 'de',
    name: 'Deutschland',
    contry_code: 'de'
  }
]


function Menu () {
  const { t } = useTranslation();
  const currentLenguageCode = cookies.get('i18next') || 'en'

  useEffect(() => {


  })

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
                <span className="dropdown-item-text">{t('language')}</span>
                {language.map(({ code, name, contry_code }) => (
                  <NavDropdown.Item
                    onClick={() => i18n.changeLanguage(code)}
                    key={code}
                    disabled={code === currentLenguageCode}
                  >
                    <span className={`flag-icon flag-icon-${contry_code} mx-2`}
                      style={{ opacity: code === currentLenguageCode ? 0.3 : 1 }}
                    ></span>
                    {name}
                  </NavDropdown.Item>
                ))}

              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu

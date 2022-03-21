import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button } from 'react-bootstrap'
import { ethers, Contract } from 'ethers';

// import NavDropdown from 'react-bootstrap/NavDropdown'

import useLocalStorage from '../../hooks/useLocalStorage'

function Menu () {


  const [wallet, setWallet] = useState(null)
  const [userData, setUserData] = useLocalStorage("account", null)

  // con localStorage
  const accountSubmitRequest = async (e) => {
    e.preventDefault()
    try {
      // si existe Meta Mask Extension e
      if (window.ethereum) {
        console.log("Si esta instalada Meta Mask")
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          })
          console.log(accounts[0])
          // Guardo los datos en localStorage
          setUserData({ wallet: accounts[0], favorites: [] });
          // setWallet(accounts[0])
          window.location.reload(false);
        } catch (error) {
          console.log(error)
        }

      } else {
        console.log("no esta instalada")
      }
    } catch (error) {
      console.log(error)
    }
  }


  async function requestAccount () {
    // si existe Meta Mask Extension e
    if (window.ethereum) {
      console.log("Si esta instalada Meta Mask")
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        console.log(accounts[0])
        // setWallet(accounts[0])
      } catch (error) {
        console.log(error)
      }

    } else {
      console.log("no esta instalada")
    }
  }

  async function connectWallet () {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      signer.getAddress().then(result => { setWallet(result) })

      console.log("signer:", signer)
      console.log("provider:", provider)
    }
  }

  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Navbar.Brand href="/">prueba</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 navbar-dark bg-dark"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Form1">Form1</Nav.Link>
            <Nav.Link href="/Form2">Form2</Nav.Link>
            <Nav.Link href="/Form3">Form3</Nav.Link>
            <Nav.Link href="/Datos">Datos</Nav.Link>
            <Nav.Link href="/Frutas">Frutas</Nav.Link>
            <Nav.Link href="/wallet">wallet</Nav.Link>
            <Nav.Link href="/walletdos">walletDos</Nav.Link>
            <Nav.Link href="/FormAddArray">FormAddArray</Nav.Link>
            <Nav.Link href="/FormAddDelToArray">FormAddDelToArray</Nav.Link>
            <Nav.Link href="/CryptosFabChecked">CryptosFabChecked</Nav.Link>
            <Nav.Link href="/CryptosFabCheckedAddDelArray">CryptosFabCheckedAddDelArray</Nav.Link>
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
          <Button variant="outline-danger" onClick={accountSubmitRequest}>requestAccount</Button>
          <Button variant="outline-success" onClick={() => requestAccount()}>requestAccount</Button>
          <Button variant="outline-info" onClick={() => connectWallet()}>Conectar wallet</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu

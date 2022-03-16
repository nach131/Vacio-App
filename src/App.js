import React, { useState } from 'react'

import { Routes, Route, Outlet } from "react-router-dom";
import { ethers, Contract } from 'ethers';
import {
  Button,
  Col,
  Row

} from 'react-bootstrap';


import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Layouts/Menu'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Datos from './components/Datos'
import Frutas from './components/Frutas';
import FormAddArray from './components/FormAddArray';
import FormAddDelToArray from './components/FormAddDelToArray';
import CryptosFabChecked from './components/CryptosFabChecked'
import CryptosFabCheckedAddDelArray from './components/CryptosFabCheckedAddDelArray/index'

function App () {


  const [wallet, setWallet] = useState('')

  async function requestAccount () {
    console.log("toma")
    // si existe Meta Mask Extension e
    if (window.ethereum) {
      console.log("Si esta instalada Meta Mask")
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        console.log(accounts[0])
        setWallet(accounts[0])
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
      // await window.ethereum.request({ method: 'eth_requestAccounts' })

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider)
    }
  }

  async function disconetWallet () {

    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }]
    })
  }


  return (
    <>
      {/* <BrowserRouter> */}
      <Menu />
      <div className="App-header ">
        <div className="App">
          <Col xl={6} className="mx-auto mt-3">
            <button
              onClick={() => requestAccount()}
              className="btn btn-success mb-3">requestAccount</button>
            <button
              onClick={() => connectWallet()}
              className="btn btn-info mb-3">Conectar wallet</button>
            <button
              onClick={() => disconetWallet()}
              className="btn btn-danger mb-3">Desconectar wallet</button>
          </Col>
          <h4>Wallet Address: {wallet}</h4>


          <Outlet />
          <Routes>
            <Route excact path="/Form1" element={<Form1 />} />
            <Route excact path="/Form2" element={<Form2 />} />
            <Route excact path="/Form3" element={<Form3 />} />
            <Route excact path="/Datos" element={<Datos />} />
            <Route excact path="/Frutas" element={<Frutas />} />
            <Route excact path="/FormAddArray" element={<FormAddArray />} />
            <Route excact path="/FormAddDelToArray" element={<FormAddDelToArray />} />
            <Route excact path="/CryptosFabChecked" element={<CryptosFabChecked />} />
            <Route excact path="/CryptosFabCheckedAddDelArray" element={<CryptosFabCheckedAddDelArray />} />
          </Routes>

        </div>
      </div>
      {/* </BrowserRouter> */}
    </>

  );
}




export default App;

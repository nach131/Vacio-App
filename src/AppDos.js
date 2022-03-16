import React, { useState } from 'react'
import { ethers, Contract } from 'ethers';

import { Routes, Route, Outlet } from "react-router-dom";


import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Layout/Menu'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'

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
          <button
            onClick={() => requestAccount()}
            className="btn btn-success">requestAccount</button>
          <button
            onClick={() => connectWallet()}
            className="btn btn-info">Conectar wallet</button>
          <button
            onClick={() => disconetWallet()}
            className="btn btn-danger">Desconectar wallet</button>
          <h4>Wallet Address: {wallet}</h4>
          <Outlet />
          <Routes>
            <Route excact path="/Form1" element={<Form1 />} />
            <Route excact path="/Form2" element={<Form2 />} />
            <Route excact path="/Form3" element={<Form3 />} />

          </Routes>

        </div>
      </div>
      {/* </BrowserRouter> */}
    </>

  );
}




export default App;

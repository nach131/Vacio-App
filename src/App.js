import React, { useState, useEffect } from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { getAllWallet } from './services/wallet'



function App () {

  const walletId = '0x382326696506Af9D09c3E82284161Ed227ed5Cd4'
  const net = 56
  const [wallet, setWallet] = useState([])


  useEffect(() => {
    getAllWallet(walletId, net)
      .then(initialWallet => {
        setWallet(initialWallet)
        window.localStorage.setItem('tokemo', JSON.stringify(initialWallet.data.items))
      })
  }, [setWallet])

  console.log(wallet)
  return (
    <div className="App" >
      <header className="App-header">
        const element =
        <FontAwesomeIcon icon={faArrowRight} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} />

      </header>
    </div>
  );
}



export default App


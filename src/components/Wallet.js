import React, { useState } from 'react'
import { ethers, Contract } from 'ethers';
import { Card, Button, Col, Row } from 'react-bootstrap';


function Wallet ({ account }) {
  if (account) {
    console.log("esto", account.wallet)
    console.log(typeof (account))
  }
  const [wallet, setWallet] = useState(null)

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

  async function disconetWallet () {

    setWallet(null)
    alert("no funciona, solo quita la wallet de hook")
    // await window.ethereum.request({
    //   method: "eth_requestAccounts",
    //   params: [{ eth_accounts: {} }]
    // })
  }
  return (
    <>
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
      <Card>
        <Card.Header as="h5">Wallet</Card.Header>
        <Card.Body>
          <Card.Title>LocalStorage</Card.Title>
          <Card.Text>
            esto esta en LocalStorage

            {account ? (
              <p>Wallet: {account.wallet}</p>
            ) : (
              <></>
            )}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  )
}

export default Wallet
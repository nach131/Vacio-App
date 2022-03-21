import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { abi } from '../constants/abi'

const injected = new InjectedConnector()


function WalletDos () {

  const { activate, account, active, library: provider, connector, deactivate } = useWeb3React()

  console.log(active)
  console.log("connector: ", connector)
  console.log("provider: ", provider)

  async function connect () {
    try {
      await activate(injected)

    } catch (e) {
      console.log(e)
    }
  }


  async function execute () {
    if (active) {
      const signer = provider.getSigner()
      const contractAddress = "0xF5448F3176985859908A9082791E9F7FF9C56386";

      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
        const url = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/414'
        const result = await contract.claimItem(url, {
          // from: wallet
          from: account
        })

        console.log(result);
        // await contract.store(42);
      } catch (error) {
        console.log(error);
      }

    }
  }

  async function cerrar () {

    try {
      await deactivate()
      console.log("Cerrado")

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {active ? (
        <>
          <p>"Conecctado !!!"</p>
          <h5>{account}</h5>
          <div className="col-4">
            <button className="btn btn-info" onClick={() => execute()}>Mintear</button>
            <button className="btn btn-warning" onClick={() => cerrar()}>Salir</button>
          </div>

        </>
      ) : (
        <>
          <button className="btn btn-info" onClick={() => connect()}>Conectar</button>
        </>

      )}

    </>
  )
}

export default WalletDos
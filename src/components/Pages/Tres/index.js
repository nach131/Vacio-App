import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

import { abi } from '../../../constants/abi'


import { useEagerConnect, useInactiveListener } from "./useConnected";


const injected = new InjectedConnector()

function Tres () {

  const [connected, setConnected] = useState(false)

  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React();


  console.log(account)
  // console.log("library", library)
  console.log("active", active)

  // manejar la lógica para reconocer el conector que se está activando actualmente
  const [activatingConnector, setActivatingConnector] = useState();
  console.log("connected", connected)
  console.log("activatingConnector", activatingConnector)

  useEffect(() => {
    console.log('running')
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);


  // manejar la lógica para conectarse con entusiasmo al proveedor de ethereum inyectado, si existe y ya ha otorgado acceso
  const triedEager = useEagerConnect();

  // manejar la lógica para conectarse en reacción a ciertos eventos en el proveedor de ethereum inyectado, si existe
  useInactiveListener(!triedEager || !!activatingConnector);


  // fetch eth balance of the connected account
  const [ethBalance, setEthBalance] = useState();
  useEffect(() => {
    console.log('running')
    if (library && account) {
      let stale = false;

      library
        .getBalance(account)
        .then(balance => {
          if (!stale) {
            setEthBalance(balance);
          }
        })
        .catch(() => {
          if (!stale) {
            setEthBalance(null);
          }
        });

      return () => {
        stale = true;
        setEthBalance(undefined);
      };
    }
  }, [library, account, chainId]);

  // console.log(ethers.BigNumber.toNumber(ethBalance))
  // console.log(ethBalance)



  // const handDeactivate = (e) => {

  //   window.localStorage.setItem(
  //     'account', JSON.stringify('')
  //   )
  // }






  async function execute () {
    if (active) {
      const signer = library.getSigner()
      const contractAddress = "0xF5448F3176985859908A9082791E9F7FF9C56386";

      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
        const url = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/515'
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


  return (
    <>

      {active ? (
        <>

          <Button
            variant="outline-primary"
            onClick={() => {
              setActivatingConnector(injected);
              activate(injected);
              setConnected(true)
            }}
          >
            {active ? account : 'Connect to wallet'}

          </Button>

          <Button
            variant="danger"
            onClick={() => {
              deactivate()
              // handDeactivate()
              setConnected(false);
            }}
          >Deactivate</Button>
        </>

      ) : (
        <>

          <Button
            variant="outline-primary"
            onClick={() => {
              setActivatingConnector(injected);
              activate(injected);
              setConnected(true)
            }}
          >
            {active ? account : 'Connect to wallet'}

          </Button>
        </>

      )}
      <div className="row mt-4">
        <div className="col-4">

          {/* <Button
            variant="outline-danger"
            onClick={() => {
              // handDeactivate()
            }}
          >Desconectar tmp</Button> */}
        </div>
      </div>

    </>

  )

}
export default Tres
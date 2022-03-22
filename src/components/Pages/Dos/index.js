import React, { useState, useEffect } from 'react'

import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

import { abi } from '../../../constants/abi'

import { useEagerConnect, useInactiveListener } from "./useConnected";
import { Spinner } from "./Spinner";

const injected = new InjectedConnector()

function Dos () {

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



  console.log("library", library)

  const connectorsByName = {
    Injected: injected
    // Network: network,
    // WalletConnect: walletconnect,
    // WalletLink: walletlink,
    // Ledger: ledger,
    // Trezor: trezor,
    // Frame: frame,
    // Fortmatic: fortmatic,
    // Portis: portis,
    // Squarelink: squarelink,
    // Torus: torus,
    // Authereum: authereum
  };


  // manejar la lógica para reconocer el conector que se está activando actualmente
  const [activatingConnector, setActivatingConnector] = useState();
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
  const [ethBalance, setEthBalance] = React.useState();
  React.useEffect(() => {
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
  console.log(ethBalance)

  async function execute () {
    if (active) {
      const signer = library.getSigner()
      const contractAddress = "0xF5448F3176985859908A9082791E9F7FF9C56386";

      const contract = new ethers.Contract(contractAddress, abi, signer);

      try {
        const url = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/42'
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

      <div>WalletDos</div>
      {Object.keys(connectorsByName).map(name => {
        const currentConnector = connectorsByName[name];

        const activating = currentConnector === activatingConnector;
        const connected = currentConnector === connector;
        const disabled =
          !triedEager || !!activatingConnector || connected || !!error;

        console.log("connected", connected)
        return (
          <button
            style={{
              height: "3rem",
              borderRadius: "1rem",
              borderColor: activating
                ? "orange"
                : connected
                  ? "green"
                  : "unset",
              cursor: disabled ? "unset" : "pointer",
              position: "relative"
            }}
            disabled={disabled}
            key={name}
            onClick={() => {
              setActivatingConnector(currentConnector);
              activate(connectorsByName[name]);
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                display: "flex",
                alignItems: "center",
                color: "black",
                margin: "0 0 0 1rem"
              }}
            >
              {activating && (
                <>
                  <Spinner
                    color={"black"}
                    style={{ height: "25%", marginLeft: "-1rem" }}
                  />
                </>
              )}
              {connected && (
                <span role="img" aria-label="check">
                  ✅
                </span>
              )}
            </div>
            {name}
          </button>
        );
      })}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {(active || error) && (
          <>
            <button
              onClick={() => execute()}
            >
              Mintear
            </button>
            <button
              style={{
                height: "3rem",
                marginTop: "2rem",
                borderRadius: "1rem",
                borderColor: "red",
                cursor: "pointer"
              }}
              onClick={() => {
                deactivate();
              }}
            >
              Deactivate
            </button>
          </>
        )}

        {!!error && (
          <h4 style={{ marginTop: "1rem", marginBottom: "0" }}>
            <p>"el error"</p>
            {/* {getErrorMessage(error)} */}
          </h4>
        )}
      </div>
    </>
  )
}

export default Dos
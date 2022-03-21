import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import './index.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'

const getLibrary = (provider) => {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Web3ReactProvider>

  </React.StrictMode>,
  document.getElementById('root')
);



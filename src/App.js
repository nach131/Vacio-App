import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import Menu from './components/Menu'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Datos from './components/Datos'
import Frutas from './components/Frutas';
import Cryptos from './components/Cryptos';
import FormAddArray from './components/FormAddArray';



class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        {/* <Menu /> */}

        <div className="test" >
          <div className="App">
            {/* <header className="App-header"> */}
            <div className="container">
              {/* <Frutas className="mb-2" /> */}
              {/* <Form1 /> */}
              {/* <p className="blanco">React Hook to persist</p> */}
              {/* <Form2 /> */}
              {/* <Datos /> */}
              <FormAddArray />
              <Cryptos />
            </div>
            {/* </header> */}
          </div>
        </div>
      </BrowserRouter>

    );
  }
}




export default App;

import React from 'react';
// import { Routes, Route, Outlet } from "react-router-dom";
import { Link, Route, Switch } from "wouter";

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Menu'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Datos from './components/Datos'
import Frutas from './components/Frutas';
import FormAddArray from './components/FormAddArray';
import FormAddDelToArray from './components/FormAddDelToArray';
import CryptosFabChecked from './components/CryptosFabChecked'
import CryptosFabCheckedAddDelArray from './components/CryptosFabCheckedAddDelArray/index'

class App extends React.Component {
  render () {
    return (
      <>
        <Menu />
        <div className="App-header ">
          <div className="App">
            <h5>Wouter Router</h5>

            <Switch>
              <Route path="/Form1" component={Form1} />
              <Route path="/Form2" component={Form2} />
              <Route path="/Form3" component={Form3} />
              <Route path="/Datos" component={Datos} />
              <Route path="/Frutas" component={Frutas} />
              <Route path="/FormAddArray" component={FormAddArray} />
              <Route path="/FormAddDelToArray" component={FormAddDelToArray} />
              <Route path="/CryptosFabChecked" component={CryptosFabChecked} />
              <Route path="/CryptosFabCheckedAddDelArray" component={CryptosFabCheckedAddDelArray} />
            </Switch>

          </div>
        </div>
      </>

    );
  }
}




export default App;

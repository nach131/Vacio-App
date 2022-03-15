import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
      <BrowserRouter>
        <Menu />
        <div className="App-header ">
          <div className="App">

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
      </BrowserRouter>

    );
  }
}




export default App;

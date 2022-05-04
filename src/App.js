import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootswatch/dist/flatly/bootstrap.min.css'

import Menu from './components/Layouts/Menu'
import IsotopeOrigin from './components/IsotopeOrigin'
import IsotopeNach from './components/IsotopeNach'
import Tres from './components/Tres'
import Children from './components/Children'
import IsotopeDos from './components/IsotopeDos'
import IsotopeOriginNach from './components/IsotopeOriginNach'

function App () {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/isotope_origin' element={<IsotopeOrigin />} />
        <Route path='/IsotopeOriginNach' element={<IsotopeOriginNach />} />
        <Route path='/isotope_nach' element={<IsotopeNach />} />
        <Route path='/tres' element={<Tres />} />
        <Route path='/children' element={<Children />} />
        <Route path='/isotope_dos' element={<IsotopeDos />} />
      </Routes>
    </>

  );
}





export default App;

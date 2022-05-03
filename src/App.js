import React from 'react';
import { Routes, Route, Outlet } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootswatch/dist/flatly/bootstrap.min.css'

import Menu from './components/Layouts/Menu'
import Uno from './components/Uno'
import Dos from './components/Dos'
import Tres from './components/Tres'

function App () {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/uno' element={<Uno />} />
        <Route path='/dos' element={<Dos />} />
        <Route path='/tres' element={<Tres />} />
      </Routes>
    </>

  );
}





export default App;

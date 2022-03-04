import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import ScrollComponent from './components/ScrollComponent'
import CustomHook from './components/CustomHook';
import CustomHookEnCapsulado from './components/CustomHookEnCapsulado';


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path='/' element={<Main />} />
          <Route path='/scrollcomponent' element={<ScrollComponent />} />
          <Route path='/scrollcomponent' element={<ScrollComponent />} />
          <Route path='/customhook' element={<CustomHook />} />
          <Route path='/customhookencapsulado' element={<CustomHookEnCapsulado />} />

        </>
      </Routes>
    </BrowserRouter>
  )


}




export default App

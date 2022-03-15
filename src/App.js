import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main'
import ScrollComponent from './components/ScrollComponent'
import CustomHook from './components/CustomHook';
import CustomHookEnCapsulado from './components/CustomHookEnCapsulado';
import ScrollComponentEncapsulado from './components/ScrollComponentEncapsulado'
// import Observer from './components/Observer/Index';


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path='/' element={<Main />} />
          <Route path='/scrollcomponent' element={<ScrollComponent />} />
          <Route path='/customhook' element={<CustomHook />} />
          <Route path='/customhookencapsulado' element={<CustomHookEnCapsulado />} />
          <Route path='/scrollcomponentencapsulado' element={<ScrollComponentEncapsulado />} />
          {/* <Route path='/observer' element={<Observer />} /> */}
        </>
      </Routes>
    </BrowserRouter>
  )


}




export default App

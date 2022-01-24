import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/Menu'
import Login from './components/Login'
import Form2 from './components/Form2'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Menu />
        <div className="App-header ">
          <div className="App">
            <Routes>
              <Route excact path="/login" component={<Login />} />
              <Route excact path="/form2" component={<Form2 />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}




export default App;

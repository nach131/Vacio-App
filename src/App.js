import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import Menu from './Menu'


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Menu />

        <div className="test" >
          <div className="App">
            <header className="App-header">
              <div className="container">

              </div>
            </header>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}




export default App;

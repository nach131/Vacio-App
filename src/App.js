import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootswatch/dist/sandstone/bootstrap.min.css'
import Menu from './components/Menu'
import Form1 from './components/Form1'
import Form2 from './components/Form2'


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        {/* <Menu /> */}

        <div className="test" >
          <div className="App">
            <header className="App-header">
              <div className="container">
                <Form1 />
                <p>React Hook to persist</p>
                <Form2 />
              </div>
            </header>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}




export default App;

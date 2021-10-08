import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Checkbox from './Checkbox';
import Circlebox from './Circlebox';

function App () {


  return (
    <div className="test" >
      <div className="App">
        <header className="App-header">
          <Checkbox />
          <br />
          <Circlebox />
        </header>
      </div>
    </div>
  )
}

export default App

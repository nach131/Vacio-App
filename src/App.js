import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Lista from './Lista';

function App () {

  const [item, setItem] = useState("nada pulsado")


  const ItemClick = (item) => {
    setItem(item)
    // console.log(item)
  }



  return (
    <div className="test" >
      <div className="App">
        <header className="App-header">
          <div class="alert alert-primary" role="alert">
            {item}
          </div>
          <Lista
            // pulsado={value => setItem(value)}
            esto={value => setItem(value)}
            otro={ItemClick}
          />
        </header>
      </div>
    </div>
  )
}

export default App

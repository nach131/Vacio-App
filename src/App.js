import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollComponent from './ScrollComponent'
function App () {




  return (
    <div className="test" >
      <div className="App">
        <header className="App-header">
          <h3>Infinite Scroll</h3>
          <ScrollComponent />
        </header>
      </div>
    </div>
  )
}




export default App

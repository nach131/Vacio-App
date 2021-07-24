import React, { useState } from 'react';
import './App.css';



function App() {

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },]
  })


  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] })
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "box active"
    } else {
      return "box inactive"
    }
  }


  return (

    <div className="App" >
      {appState.objects.map((elements, index) => (
        <div key={index} className={toggleActiveStyles(index)} onClick={() => {
          toggleActive(index)
        }}>

        </div>
      ))}
    </div >
  )

}


export default App

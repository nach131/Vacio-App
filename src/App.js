import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


function App () {


  return (
    <div className="App" >
      <header className="App-header">
        const element = <FontAwesomeIcon icon={faArrowRight} />
        <FontAwesomeIcon icon={faArrowAltCircleRight} />

        {/* // Light: */}
        <FontAwesomeIcon icon={["fal", "coffee"]} />
        {/* // Regular: */}
        <FontAwesomeIcon icon={["far", "coffee"]} />
        {/* // Solid */}
        <FontAwesomeIcon icon={["fas", "coffee"]} />
        {/* // ...or, omit as FontAwesome defaults to solid, so no need to prefix: */}
        <FontAwesomeIcon icon="coffee" />
        {/* // Brand: */}
        <FontAwesomeIcon icon={["fab", "github"]} />
      </header>
    </div>
  );
}



export default App


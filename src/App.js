import React from 'react';
import './App.css';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import 'bootswatch/dist/sketchy/bootstrap.min.css'
import { BsFillEggFill } from "react-icons/bs";
import { Row } from 'react-bootstrap';

const styles = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class App extends React.Component {
  render() {
    return (

      <StyleRoot>
        <div className="test" >
          <div className="App">
            <header className="App-header">
              <h1 style={styles.bounceInDown} >Los tengo asi de GRANDES !!!</h1>
              <Row className="pt-4">
              <BsFillEggFill className="App-logo egg-izq"/>
              <BsFillEggFill className="App-logo egg-der"/>
              </Row>
            </header>
          </div>
        </div>
      </StyleRoot>
    );
  }
}




export default App;

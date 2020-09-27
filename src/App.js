import React from 'react';
import './App.css';
import { bounceInDown, rollIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import 'bootswatch/dist/sketchy/bootstrap.min.css'
import { BsFillEggFill } from "react-icons/bs";
import { Row } from 'react-bootstrap';

import egg from './image/egg.svg'

const styles = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  },
  rollIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rollIn, 'rollIn')
  }

}

class App extends React.Component {
  render() {
    return (
      <>
        <StyleRoot>
          <div className="test" >
            <div className="App">
              <header className="App-header">
                <h1 style={styles.bounceInDown} >Los tengo asi de GRANDES !!!</h1>
                <Row className="pt-4">
                <img className="App-logo egg-izq" src={egg} alt="egg" style={styles.rollIn}/>
                <img className="App-logo egg-der" src={egg} alt="egg" style={styles.rollIn}/>
                  {/* <BsFillEggFill rotate={true} className="App-logo egg-izq" />
                  <BsFillEggFill className="App-logo egg-der" /> */}
                </Row>
              </header>
            </div>
          </div>
        </StyleRoot>

      </>
    );
  }
}




export default App;

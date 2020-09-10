import React, { Component } from 'react'

import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
const styles = {
  bounceInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

class Anima extends Component {
  // state = {  }
  render() { 
    return ( 
      <>
      <StyleRoot>
        <div className="test" >
          <div  className="App">
            <header className="App-header">
              <h1 style={styles.bounceInDown} >Quitado</h1>

            </header>
          </div>
        </div>
      </StyleRoot>
      </>
     );
  }
}
 
export default Anima;
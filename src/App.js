import React from 'react';
import './App.css';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { FaRocket } from 'react-icons/fa';
import { BsFillEggFill,BsEgg } from "react-icons/bs";

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
          <div  className="App">
            <header className="App-header">
            {/* <FaRocket className="App-logo"/> */}
            <BsFillEggFill className="App-logo"/>
            <BsEgg className="App-logo"/>
              <h1 style={styles.bounceInDown} >Quitado</h1>

            </header>
          </div>
        </div>
      </StyleRoot>
    );
  }
}




export default App;

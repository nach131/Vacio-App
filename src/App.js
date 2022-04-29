import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootswatch/dist/flatly/bootstrap.min.css'

import Menu from './components/Layouts/Menu'
import ScrollToTop from './components/ScrollToTop';
import Uno from './components/Uno'
import Dos from './components/Dos'
import Tres from './components/Tres'

class App extends React.Component {
  render () {
    return (
      <>
        <Menu />
        <Dos />
        <Uno />
        <Tres />
        {/* <ScrollToTop /> */}
      </>

    );
  }
}




export default App;

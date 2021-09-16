import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TablePage from './TablePage'
import Table from './Table'
import DatatablePage from './DatatablePage';
import TableArray from './TableArray';


class App extends React.Component {
  render () {
    return (

      <div className="container pt-5">
        <div className="row">
          <TableArray />
          <Table />
        </div>
        <TablePage />
        <DatatablePage />
      </div>
    );
  }
}




export default App;

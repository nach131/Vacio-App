import React, { useState } from 'react';
import './App.css';
import { makeData } from "./Utils";

// Import React Table
import ReactTable from "react-table";
// import "react-table/react-table.css";

function App () {

  const [data, setData] = useState(makeData())


  console.log(data)

  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              }
            ]
          }
        ]}
        defaultPageSize={20}
        style={{
          height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
        }}
        className="-striped -highlight"
      />
      <br />
      {/* <Tips /> */}
      {/* <Logo /> */}
    </div>
  );
}




export default App

import React from 'react'
import Dos from './Dos'
import Tres from './Tres'


function Uno () {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h3>Uno</h3>
            <Dos />
            <Tres />
          </div>
        </div>
      </div>
    </>
  )
}

export default Uno
import React from 'react'
import './error.css'
import { Row, Container, Col, Button } from 'react-bootstrap'



function Error () {
  return (
    // <Container className="error" >
    <div id='oopss' >
      <div className="oopss mt-5 pt-5">

        <div id='error-text'>
          <span>404</span>
          <p>PAGE NOT FOUND</p><p class='hmpg'><a href='/' class="back">Back To Homepage</a></p>
        </div>
      </div>
    </div>
    // </Container>
  )
}

export default Error
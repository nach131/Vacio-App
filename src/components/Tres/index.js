import React from 'react'
import { Row, Container } from 'react-bootstrap'
import ScrollToTop from '../ScrollToTop';

import './tres.css'

function index () {
  return (
    <div className="tres">

      <Container className="pt-5">
        <Row>

          <h2>Tres</h2>
        </Row>
        <ScrollToTop />
      </Container>
    </div>

  )
}

export default index
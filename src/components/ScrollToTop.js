import React from 'react'

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Col } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'

function ScrollToTop () {

  const toma = () => {

    const option = {

      spy: true,
      smooth: true,
      // offset: -70,
      duration: 500

    }
    scroll.scrollToTop(option);
    console.log("toma")
  }

  const tomate = () => {
    const options = {
      spy: true,
      smooth: true,
      // offset: -70,
      duration: 500
    }
    scroller.scrollTo('base', options);
    console.log("tomate")
  }

  return (
    <>
      <div className="pt-5">

        <div>ScrollToTop</div>
        <Row>
          <Col className="mx-auto">
            <Button onClick={toma}>To top</Button>
          </Col>
        </Row>

        <Button
          className="mt-2"
          variant="info"
          onClick={() => tomate()}>Tomate</Button>

      </div>
    </>
  )
}

export default ScrollToTop
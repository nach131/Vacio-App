import React from 'react'

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Row, Col, Container, Stack } from 'react-bootstrap'

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



  return (
    <>
      {/* <Container className="pt-5"> */}

      <Row className="pt-5">
        <Col
        // md={{ span: 3, offset: 3 }}
        //  className="mx-auto"
        >
          <Stack
            className="col-md-1 mx-auto"
            // direction="horizontal" 
            gap={1}>


            <Button onClick={toma}>To top</Button>
          </Stack>
        </Col>
      </Row>
      <Stack direction="horizontal" className="mt-2" gap={3}>
        <Button
          variant="info"
        >
          First item</Button>
        <Button
          variant="info"
        >
          Third item</Button>
        <Button
          className="ms-auto"
          variant="info"
        >
          Third item</Button>

        {/* <div className="bg-light border">First item</div> */}
        {/* <div className="bg-light border ms-auto">Second item</div> */}
        {/* <div className="bg-light border">Third item</div> */}
      </Stack>
      {/* </Container> */}
      <div className="d-flex justify-content-between aling-items center">
        {/* <Col className="align-self-end"> */}

        <Button
          className="ms-auto"
          variant="success"
        >
          Third item</Button>
        {/* </Col> */}
      </div>
    </>
  )
}

export default ScrollToTop
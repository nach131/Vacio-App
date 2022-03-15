import React from 'react'
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap'
import { UseLoadImage } from '../utils/UseLoadImage'

function SpinnerRender () {
  return (
    <div>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </div>
  )
}




export default function CustomHookEnCapsulado () {
  const [images, more, loading] = UseLoadImage() // mi hook
  // const [images, more, loading] = useInfinitePicsum() // mi hook

  console.log(loading)





  return (
    <>
      <header className="ScrollInf">
        <h2>ScrollComponentEncapsulado</h2>

        <Container>
          <Row className="" >
            {/* {Array.from({ length: 10 }).map((_, idx) => ( */}
            {images.map((el, i) => (

              <Col className="mt-3" md="auto" xl="4" key={`img${i}`}>
                <Card style={{ width: '20rem' }}  >
                  <Card.Img className="card-img" variant="top" src={el.url} />

                </Card>
              </Col>

            ))}

          </Row>

        </Container>
        <Col className="py-5 col-2 mx-auto ">

          <Button
            className="btn-block"
            // size="lg"
            disabled={loading}
            onClick={more}
            variant="outline-light"
          >
            {loading ? <SpinnerRender /> : 'Mas imagenes'}
          </Button>
        </Col>


      </header>
    </>
  )
}


import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap'


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


export default function CustomHook () {

  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])
  const [blocks, setBlocks] = useState(1)

  const more = async () => {
    setLoading(true)
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
    setLoading(false)
  }

  const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)).json()

  useEffect(() => {
    ; (async () => {
      const picsum = await fetch_images(0)
      setImages(picsum)
      setLoading(false)
    })()

  }, [])

  return (
    <header className="App">

      <Container>
        <Row className="" >
          {/* {Array.from({ length: 10 }).map((_, idx) => ( */}
          {images.map((el, i) => (

            <Col className="mt-3" md="auto" xl="4" key={`img${i}`}>
              <Card style={{ width: '20rem' }}>
                <Card.Img className="card-img" variant="top" src={el.download_url} />

              </Card>
            </Col>

          ))}
        </Row>
      </Container>
      <Col className="py-3 col-2 mx-auto ">
        <Button
          className="btn-block"
          // size="lg"
          disabled={loading}
          onClick={more}
          variant="success">
          {/* Mas imagenes */}
          {loading ? <SpinnerRender /> : 'Mas imagenes'}
          {/* <SpinnerRender /> */}
        </Button>
      </Col>

    </header>
  )
}
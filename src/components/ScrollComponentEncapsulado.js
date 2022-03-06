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


export default function CustomHookEnCapsulado () {
  const [images, more] = useInfinitePicsum() // mi hook

  return (
    <>
      <header className="ScrollInf">
        <h2>ScrollComponentEncapsulado</h2>
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
            onClick={more}
            variant="outline-light"
          >
            Mas imagenes
          </Button>
        </Col>
      </header>
    </>
  )
}

const useInfinitePicsum = () => {
  // estado para almacenar las imágenes
  const [images, setImages] = useState([])
  // estado para contar el número de bloques que pido, lo necesito para que picsum no me devuelva siempre las mismas imágenes
  const [blocks, setBlocks] = useState(1)

  // función para pedir más imágenes
  const more = async () => {
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
  }

  // función para pedir (esta vez literalmente) las imagenes a picsum
  const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)).json()

  // useEffect para ejecutar al principio la primera "pedida" de imágenes
  useEffect(() => {
    (async () => {
      const picsum = await fetch_images(0)
      setImages(picsum)
    })()
  }, [])

  return [images, more]
}
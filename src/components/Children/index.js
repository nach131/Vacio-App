import React from 'react'
import './cuatro.css'
import { Row, Container, Col, Button } from 'react-bootstrap'

const Cuadrado = (props) => {
  console.log(props)
  const { nom, color } = props.data

  return (
    <div className={`${color} box`}>
      {nom}
      {props.children}
    </div>
  )
}

const lista = [
  {
    "id": 1,
    "nom": 'warning',
    "color": "bg-warning"
  },
  {
    "id": 2,
    "nom": 'secondary',
    "color": "bg-secondary"
  }, {
    "id": 3,
    "nom": 'success',
    "color": "bg-success"
  }
]

function Children () {
  return (
    <>
      <div className="pt-5 mt-5">Cuatro</div>
      <Container>
        <Row>
          {lista.map(i => (

            <Cuadrado key={i.id} data={i} >
              <>
                <p>
                  children
                </p>
              </>
            </Cuadrado>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Children
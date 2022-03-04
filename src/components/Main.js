import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <div className="test" >
      <div className="App">
        <header className="App-header">
          <h3>Infinite Scroll</h3>
          <Link to={`/scrollcomponent`}>
            <Button variant="primary">ScrollComponent </Button>
          </Link>
          <Link to={`/customhook`}>
            <Button variant="success">CustomHook </Button>
          </Link>
          <Link to={`/customhookencapsulado`}>
            <Button variant="warning">CustomHookEnCapsulado </Button>
          </Link>
        </header>
      </div>
    </div>
  )
}

export default Main
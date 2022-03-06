import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <div className="test" >
      <div className="App">
        <header className="App-header">
          <h3>Infinite Scroll</h3>

          <div className="col-2">
            <Card className="p-2" border="warning" bg="dark">
              <Link to={`/scrollcomponent`}>
                <Button className="mb-2 btn-block" variant="primary">ScrollComponent </Button>
              </Link>
              <Link to={`/customhook`}>
                <Button className="mb-2 btn-block" variant="success">CustomHook </Button>
              </Link>
              <Link to={`/customhookencapsulado`}>
                <Button className="mb-2 btn-block" variant="warning">CustomHookEnCapsulado </Button>
              </Link>
              <Link to={`/scrollcomponentencapsulado`}>
                <Button className="mb-2 btn-block" variant="info">ScrollComponentEncapsulado </Button>
              </Link>
            </Card>
          </div>

        </header>
      </div>
    </div>
  )
}

export default Main
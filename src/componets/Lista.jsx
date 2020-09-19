import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
// require('../Mongoose/8.Find')

class Lista extends Component {
  // state = {  }
  render() {
    return (
      <Container className="mx-auto">
        <Row>
          <h1>La lista</h1>
        </Row>
        <Row className="mx-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            architecto reprehenderit modi ratione, quia est ducimus natus cumque
            voluptate vitae, omnis sunt praesentium, sint perferendis quibusdam
            repellendus beatae quos facere.
          </p>
        </Row>
      </Container>
    );
  }
}

export default Lista;

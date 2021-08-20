import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ZombieItem from "../../components/ZombieItem/ZombieItem";

function ZombieList({ web3 }) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Zombie List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ZombieItem />
        </Col>
      </Row>
    </Container>
  );
}

export default ZombieList;

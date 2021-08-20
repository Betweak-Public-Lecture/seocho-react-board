import React from "react";
import { Card, Button } from "react-bootstrap";

// string name;
// uint256 dna;
// uint32 level;
// uint32 readyTime;
// uint16 winCount;
// uint16 lossCount;
export default function ZombieItem({
  zombieId = 1,
  name = "팬더",
  dna = "1258715412587154",
  level = 3,
  readyTime = Date.now(),
  winCount = 3,
  lossCount = 2,
  onClick = function () {},
}) {
  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

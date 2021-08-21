import React, { useEffect } from "react";
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
  owner = "",
  onClick = function () {},
  zombieContract = null,
  ethAccount = "",
}) {
  useEffect(() => {
    console.log("zombieItem");
    console.log(zombieContract);
    /**
     * [연습문제]
     * zombieContract에서 zombies 메소드(view 메소드 (call vs send))를 호출하고 인자로서 전달받은 zombieId를 넣어라
     * - data를 가져오면 이를 state에 저장해라(state생성 해야 함 )
     * - state로 저장된 내용을 아래 component에서 rendering하시오.
     */
  }, []);

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text className="mb-0">dna: {dna}</Card.Text>
        <Card.Text className="mb-0">level: {level}</Card.Text>
        <Card.Text className="mb-0">준비시간: {readyTime}</Card.Text>
        <Card.Text className="mb-0">
          승리: {winCount} / {winCount + lossCount}
        </Card.Text>
        <Card.Text className="mb-0"></Card.Text>

        <Button
          variant="dark"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          Action
        </Button>
      </Card.Body>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import zombieArtifact from "../artifacts/ZombieOwnership.json";

function Web3Practice({ web3 }) {
  const [zombieContract, setZombieContract] = React.useState(null);
  const [ethAccount, setEthAccount] = useState("");
  useEffect(() => {
    console.log(web3);
    if (web3) {
      const zombieContract = new web3.eth.Contract(
        zombieArtifact.abi,
        zombieArtifact.networks["5777"].address
      );
      setZombieContract(zombieContract);

      web3.eth.getAccounts().then((accounts) => {
        setEthAccount(accounts[0]);
      });
    }
  }, [web3]);

  return (
    <Container>
      <Row>
        <Col xs={4} className="my-3">
          {/* 1. button 클릭시 zombieContract console.log */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              console.log(zombieContract);
            }}
          >
            zombieContract보기
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={(e) => {
              e.preventDefault();
              console.log(zombieContract.options);
            }}
          >
            Option
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={(e) => {
              e.preventDefault();
              const cloneContract = zombieContract.clone();
              cloneContract.options.address =
                "0x9BD6268845a1B7bc6318329C384F96BDDE219c2B";
              console.log(cloneContract);
            }}
          >
            Clone to ZombieFactory
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async (e) => {
              e.preventDefault();
              const name = window.prompt("좀비 이름 입력");
              const result = await zombieContract.methods
                .createRandomZombie(name)
                .send({
                  from: ethAccount,
                });
              console.log(result);
            }}
          >
            Create RandomZombie(계정당1회)
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async (e) => {
              /**
               * 연습문제1.
               * 내가 가진 좀비들의 ID를 return하는 tx을 call하여라.
               * - gas가 소모되면 안된다,
               * - console.log로 표현하여야 한다.
               */
              e.preventDefault();
              const result = await zombieContract.methods
                .getZombiesByOwner(ethAccount)
                .call({
                  from: ethAccount,
                });
              console.log(result);
            }}
          >
            내 좀비 조회
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async () => {
              /**
               * 연습문제2.
               * zombieId를 prompt로 입력받아
               * levelup하는 Transaction을 발생시켜라.
               */
              const zombieId = window.prompt("zombie Id입력");
              const result = await zombieContract.methods
                .levelUp(zombieId)
                .send({
                  from: ethAccount,
                  value: web3.utils.toWei("0.001", "ether"),
                });
              console.log(result);
            }}
          >
            Zombie Levelup
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async () => {
              // 연습문제3.
              //  setAttakVictoryProbability
              // prompt로 입력받아 attackVictoryProbability를 변경해보세요.
              const victoryProbability =
                window.prompt("승리 확률을 입력해주세요.");
              const result = await zombieContract.methods
                .setAttakVictoryProbability(victoryProbability)
                .send({
                  from: ethAccount,
                });
              console.log(result);
            }}
          >
            setAttackVictoryProbability
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async () => {
              // 연습문제4.
              // 0번 zombie로 zombieNumber를 입력받아서 공격하세요.
              const zombieId = window.prompt("공격할 좀비 선택");
              const targetZombieId = window.prompt("공격 대상 좀비 입력");
              const result = await zombieContract.methods
                .attack(zombieId, targetZombieId)
                .send({
                  from: ethAccount,
                });
              console.log(result);
            }}
          >
            Zombie Attack
          </Button>
        </Col>
        <Col xs={4} className="my-3">
          <Button
            onClick={async () => {
              /**
               * 연습문제5.
               * 가지고 있는 좀비 Id를 입력받고
               * 전달할 address도 입력받아서
               * zombie의 소유권 전송하기.
               */
              const result = await zombieContract.methods
                .getZombiesByOwner(ethAccount)
                .call({
                  from: ethAccount,
                });

              const zombieId = window.prompt(`전송할 좀비Id 입력 (${result})`);
              const toAddr = window.prompt("전달할 address 입력");
              const result2 = await zombieContract.methods
                .transferFrom(ethAccount, toAddr, zombieId)
                .send({
                  from: ethAccount,
                });
              console.log(result2);
            }}
          >
            좀비 전송하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Web3Practice;

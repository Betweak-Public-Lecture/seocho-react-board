import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ZombieItem from "../../components/ZombieItem/ZombieItem";
import zombieArtifact from "../../artifacts/ZombieOwnership.json";

/**
 * 내 zombie들의 list를 rendering
 * @returns
 */

function ZombieList({ web3, history, match, location }) {
  const [ethAccount, setEthAccount] = useState("");
  const [zombieContract, setZombieContract] = useState(null);
  const [zombieList, setZombieList] = useState([]);

  useEffect(() => {
    if (web3) {
      web3.eth.getAccounts().then((accounts) => {
        setEthAccount(accounts[0]);
      });
      const zombieContract = new web3.eth.Contract(
        zombieArtifact.abi,
        zombieArtifact.networks["5777"].address
      );
      setZombieContract(zombieContract);
    }
  }, [web3]);

  /**
   * Adress별로 zombie의 리스트를 renderint
   * (내 좀비 리스트)
   */
  useEffect(() => {
    if (ethAccount && zombieContract) {
      // external view함수 ==> call => gas 소모 X
      // view함수X => send => gas 소모 O
      console.log(zombieContract.methods.getZombiesByOwner(ethAccount));
      console.log(
        zombieContract.methods.getZombiesByOwner(ethAccount).encodeABI()
      );
      zombieContract.methods
        .getZombiesByOwner(ethAccount)
        .call({
          from: ethAccount,
        })
        .then((data) => {
          console.log(data);
          setZombieList(data);
        });
    }
  }, [ethAccount, zombieContract]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Zombie List</h1>
        </Col>
      </Row>
      <Row>
        {zombieList.map((zombieId) => {
          return (
            <Col xs={2} sm={3} md={4}>
              <ZombieItem
                zombieId={zombieId}
                zombieContract={zombieContract}
                ethAccount={ethAccount}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ZombieList;

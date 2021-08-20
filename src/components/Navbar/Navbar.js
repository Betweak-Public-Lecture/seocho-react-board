import React from "react";
/** react-router-dom */
import { Link } from "react-router-dom";
import {
  Navbar as BSNavbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function Navbar({ web3 }) {
  return (
    <BSNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* 
        1. 로고 - BSNavbar.Brand를 클릭했을 때 home화면으로 이동하도록 작성
        - react-bootstrap 문서 참고
        - Client Side Routing(react-router-dom 이용)
         */}
        <BSNavbar.Brand as={Link} to="/">
          React-Board
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/zombies">
              Zombies
            </Nav.Link>
            <Nav.Link as={Link} to="/board">
              게시글
            </Nav.Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/deets">More deets</Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#memes"
              as={"div"}
              onClick={async () => {
                const accounts = await web3.eth.getAccounts();
                const receipt = await web3.eth.sendTransaction({
                  from: accounts[0],
                  to: "0x0bFb16E1E881c8C393B52a4f8B7Ec0020376f983",
                  value: web3.utils.toWei("1", "ether"),
                });
                console.log(receipt);
                // console.log(window.Web3);
                // const web3 = new Web3(Web3.givenProvider);
                // // console.log(web3);
                // // const account = await web3.eth.requestAccounts()[0];
                // // console.log(account);
                // await web3.eth.sendTransaction({
                //   from: "0x0DC56DDB6Cb4AC6862116c4E8c636237788749DC",
                //   to: "0x0bFb16E1E881c8C393B52a4f8B7Ec0020376f983",
                //   value: 10 ** 18,
                // });
              }}
            >
              Send ETH
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;

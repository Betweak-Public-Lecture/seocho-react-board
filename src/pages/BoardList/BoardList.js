import React from "react";
/**
 * react-bootstrap
 */
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

function BoardList(props) {
  const { history, boardList } = props;

  /**
  연습문제2.
  props로 App.js로부터 boardList(배열)를 전달받았다.
  해당 배열을 반복하여 <ListGroup.Item>에 각 요소의 title을 출력하도록 
  JSX를 수정하여라.

  ** hint: 배열 관련 함수 참조 // JSX내에서 JS코드는 {} 중괄호 내에서 사용!
   */

  /**
   * 연습문제3.
   * props로 전달받은 history객체의 push함수를 이용해서
   * BoardDetail로 이동시켜라. (/board/:boardId)
   */

  /**
   * 연습문제3-2.
   * props로 전달받은 history객체의 push함수를 이용해서
   * BoardWrite(/board/write)로 이동시켜라
   */

  return (
    <Container>
      <Row>
        <Col>
          <h1>BoardList</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ float: "right" }}>
            <Button
              variant="outline-secondary"
              onClick={() => {
                history.push("/board/write");
              }}
            >
              글쓰기
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup as="ul">
            {boardList.map(function (item) {
              return (
                <ListGroup.Item
                  as="li"
                  key={item.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push(`/board/${item.id}`);
                  }}
                >
                  {item.title}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default BoardList;

import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";

function BoardDetail({ boardList, match, history }) {
  const [board, setBoard] = useState({
    id: '',
    title: '',
    content: ''
  });
  const boardId = match.params.boardId;

  useEffect(()=>{
    const boardItem = boardList.filter(function (item) {
      if (item.id === Number.parseInt(boardId)) {
        return true;
      }
      return false;
    });
    if (!boardItem.length) {
      alert("게시글이 없습니다.");
      history.push("/board");
    }
    const board = setBoard(boardItem[0]);
  }, [])

  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Board Detail({board.id})</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>{board.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              padding: 10,
              minHeight: 400,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#e9e9e9",
            }}
          >
            {board.content}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BoardDetail;

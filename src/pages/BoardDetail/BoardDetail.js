import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function BoardDetail({ boardList, onDelete, match, history }) {
  const [board, setBoard] = useState({
    id: "",
    title: "",
    content: "",
  });
  const boardId = match.params.boardId;

  useEffect(() => {
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
    setBoard(boardItem[0]);
  }, []);

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
      <Row className="my-3">
        <Col>
          <div className="mx-2" style={{ float: "right" }}>
            <Button variant="outline-info" onClick={(e)=>{
              e.preventDefault();
              history.push(`/board/${boardId}/edit`);
            }}>수정</Button>
          </div>
          <div className="mx-2" style={{ float: "right" }}>
            <Button variant="outline-danger" onClick={()=>{
              onDelete(Number.parseInt(boardId));
              history.push('/board');
            }}>삭제</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BoardDetail;

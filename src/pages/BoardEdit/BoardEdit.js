import React, { useState, useEffect } from "react";
/**
 * react-bootstrap
 */
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function BoardEdit({ boardList, onEdit, match, location, history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const boardId = match.params.boardId;

  useEffect(()=>{
    const boardItem = boardList.filter(function(item){
        if (item.id===Number.parseInt(boardId)){
            return true;
        }
        return false;
    })
    if (!boardItem.length){
        alert("해당하는 게시글이 없습니다.");
        history.push('/board');
    } else{
        const board = boardItem[0];
        setTitle(board.title);
        setContent(board.content);
    }
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>EditBoard ({boardId})</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <Form.Group className="my-3" controlId="form.title">
              <Form.Label>글 제목</Form.Label>
              <Form.Control
                type="text"
                placeholder="글제목"
                value={title}
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="my-3" controlId="form.content">
              <Form.Label>글 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={content}
                onChange={(e) => {
                  e.preventDefault();
                  setContent(e.target.value);
                }}
              />
            </Form.Group>
            <div style={{ float: "right" }}>
              <Button
                variant="outline-secondary"
                onClick={()=>{
                    onEdit(
                        Number.parseInt(boardId),
                        title,
                        content
                    );
                    history.push(`/board/${boardId}`);
                }}
              >
                수정
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default BoardEdit;

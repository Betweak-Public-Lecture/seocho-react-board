import React, { useState } from "react";
/**
 * react-bootstrap
 */
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function WriteBoard(props) {
  /**
   * 연습문제1. react-bootstrap을 이용해서 \
   * 반응형 grid 구성.
   *
   * 연습문제2. react-bootstrap의 form/input을 이용해서
   * 게시글 제목: input(text)
   * 게시글 내용: input(textarea)를 만들어라.
   */

  /**
   * 연습문제3.
   * content(textarea에서)를 입력받고
   * hook을사용해서 state로 관리하여라 [content, setContent]
   */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <h1>WriteBoard</h1>
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
              <Button variant="outline-secondary">작성</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WriteBoard;

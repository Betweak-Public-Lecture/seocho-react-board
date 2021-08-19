import React, { useState } from "react";
/**
 * react-bootstrap
 */
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function WriteBoard({ onWrite, match, location, history }) {
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

  /**
   * 연습문제4. 글쓰기
   * - 글 작성을 클릭하면 저장된 title과 content가 글쓰기 기능을 실행하여야 한다.
   * - title과 content 둘 중 하나라도 비어 있으면 글 작성이 안되고 경고창(alert)을 발생시켜라.
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
              <Button
                variant="outline-secondary"
                onClick={() => {
                  // - title과 content 둘 중 하나라도 비어 있으면 글 작성이 안되고 경고창(alert)을 발생시켜라.
                  if (!title || !content) {
                    alert("title과 content 모두 작성이 되어야 합니다.");
                    return false;
                  } else {
                    onWrite(title, content);
                    alert(`게시글 <${title}> 작성이 완료되었습니다.`);
                    history.push("/board");
                  }
                }}
              >
                작성
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WriteBoard;

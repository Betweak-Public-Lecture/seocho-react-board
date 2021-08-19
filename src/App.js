import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import ClassHelloWorld from "./components/ClassHelloWorld/ClassHelloWorld";
import CaptionImage from "./components/CaptionImage/CaptionImage";
import Blink from "./components/Blink/Blink";
import BlinkBox from "./components/BlinkBox/BlinkBox";

/**
 * react-router-dom
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Pages
 */
import Home from "./pages/Home/Home";
import BoardList from "./pages/BoardList/BoardList";
import WriteBoard from "./pages/WriteBoard/WriteBoard";
import BoardDetail from "./pages/BoardDetail/BoardDetail";

/**
 * Component
 */
import Navbar from "./components/Navbar/Navbar";

import board from "./mock/board";

function App() {
  /**
   * 연습문제 1. 데이터 추가
   * - App.js에서 boardList에 데이터를 추가하는 함수를 작성하여라.
   * - 이를 WriteBoard 컴포넌트에 전달하여라
   * - ** 배열 관련함수 사용(배열에 데이터 추가. push X)
   */

  /** 연습문제 2. boardDetail
   * - App.js에서 boardDetail에 boardList를 전달.
   * - boardDetail에선 boardList를 받아서 target이 되는 boardId에 맞는 데이터를 가지고
   * - 해당 내용 rendering (title, content)
   */

  /**
   * 연습문제3. boardDelete 함수 생성
   * - boardDelete 함수를 App.js에서 선언(표현)
   * - boardDetail에 삭제 버튼에 연결
   * - 삭제후엔 BoardList컴포넌트로 이동.
   */

  const [boardIdCounter, setBoardIdCounter] = useState(3);
  const [boardList, setBoardList] = useState(board);

  const addBoardItem = useCallback(
    (title, content) => {
      //concat : 배열 관련함수 - 새로운 배열을 만든다.
      const newBoardList = boardList.concat({
        id: boardIdCounter,
        title: title,
        content: content,
      });
      setBoardList(newBoardList);
      setBoardIdCounter(boardIdCounter + 1);
    },
    [boardList, boardIdCounter]
  );
  const deleteBoardItem = useCallback(
    (boardId) => {
      const newBoardList = boardList.filter(function (item) {
        if (item.id === boardId) {
          return false;
        } else {
          return true;
        }
      });
      setBoardList(newBoardList);
    },
    [boardList]
  );

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/board"
          exact
          component={(props) => <BoardList {...props} boardList={boardList} />}
        />
        <Route
          path="/board/write"
          exact
          component={(props) => (
            <WriteBoard {...props} onWrite={addBoardItem} />
          )}
        />
        <Route
          path="/board/:boardId"
          exact
          component={(props) => (
            <BoardDetail
              {...props}
              boardList={boardList}
              onDelete={deleteBoardItem}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

function App2() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <ClassHelloWorld /> */}
      {/* <CaptionImage
        imgUrl="https://shop.biumfood.com/upload/1535360125_5261498.jpg"
        alt="바나나"
        caption="이건 바나나입니다."
      />
      <CaptionImage
        imgUrl="https://th.bing.com/th/id/R.a6d080f70ac1dd0af52596da51ff312f?rik=8qll06f8GOFuXA&riu=http%3a%2f%2fojsfile.ohmynews.com%2fSTD_IMG_FILE%2f2019%2f0214%2fIE002457148_STD.jpg&ehk=ScVpHH0jb7PSeLX9%2fXHTVN78rrd93XZE%2f9nkIcQ9kqo%3d&risl=&pid=ImgRaw&r=0"
        alt="사과"
        caption="사과 이미지"
      />
      <CaptionImage
        imgUrl="https://www-trucknbus.hyundai.com/kr/upload/carmng/KV00000008/MegaTtuck-key-visual01-m.jpg"
        alt="트럭"
        caption="이건 트럭입니다."
      /> */}
      {/* <Blink text="이 글자는 3초에 한 번씩 깜빡입니다." /> */}
      {/* <BlinkBox text="이 글자는 3초에 한 번씩 깜빡입니다." ms={3000} /> */}
    </div>
  );
}

export default App;

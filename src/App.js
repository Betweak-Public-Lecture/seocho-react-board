import React, {useState, useEffect, useCallback} from 'react';
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
  const [boardList, setBoardList] = useState(board);
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
        <Route path="/board/write" exact component={WriteBoard} />
        <Route path="/board/:boardId" exact component={BoardDetail} />
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

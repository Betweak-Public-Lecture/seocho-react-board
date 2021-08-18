import React from "react";
import "./HelloWorld.css";

export default function HelloWorld() {
  return (
    //   jsx에서 HTML class 및 Style 사용하기
    // font-size ==> font -(minus) size
    // font-size: font size ==> fontSize // 변수 표현방식 (CamelCase)
    // background-color: background color
    // margin-left: margin left
    <div className={"hello-world-wrap"}>
      <h1>Hello, World!</h1>
      <p>This is my first React Application!</p>
    </div>
  );
}

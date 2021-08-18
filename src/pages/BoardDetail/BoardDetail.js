import React from "react";

function BoardDetail(props) {
  console.log(props);
  const boardId = props.match.params.boardId;
  console.log(props.match.params.boardId);
  return (
    <div>
      <h1>Board Detail</h1>
      <p>{boardId}번째 게시글을 열람하셨습니다.</p>
    </div>
  );
}

export default BoardDetail;

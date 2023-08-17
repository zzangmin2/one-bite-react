import "./App.css";
import React, { useState, useEffect } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "밥",
    content: "마라탕",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "밥밥",
    content: "탕후루",
    emotion: 2,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "밥밥밥",
    content: "엽떡",
    emotion: 1,
    create_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "밥밥밥밥",
    content: "신전",
    emotion: 4,
    create_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;

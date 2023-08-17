import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "밥",
//     content: "마라탕",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "밥밥",
//     content: "탕후루",
//     emotion: 2,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "밥밥밥",
//     content: "엽떡",
//     emotion: 1,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "밥밥밥밥",
//     content: "신전",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;

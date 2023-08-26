import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  // const [author, setAuthor] = useState("안녕");
  // const [content, setContent] = useState("");

  // 위 state를 하나로 합치기

  useEffect(() => {
    console.log("DiaryEditor 렌더");
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          //onChange -> 값이 바뀌었을 때 수행하는 이벤트
          onChange={
            //     (e) => {
            //     setState({
            //       ...state, //스프레드연산자
            //       author: e.target.value /*content: state.content*/,
            //     });

            //     handleChangeState 상태 변화 함수 사용하기

            //   }

            handleChangeState
          }
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);

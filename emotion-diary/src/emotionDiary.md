# 7-1. PAGE ROUTING

- ROUTING이란?

  - 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정
  - ROUTER
    - 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가
  - ROUTE + ING
    - 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말

- MPA (Multipage Application)
- SPA (SinglePage Application)
- CSR (Client Side Rendering)
  - _react는 SPA + CSR 방식_
    - react app이 서버에 요청을 보내지 않고 알아서 페이지를 업데이트 하여 페이지를 이동함. 즉, 서버 대기시간이 없어지고 빠른 시간에 페이지를 이동할 수 있음

# 7-2. 페이지 라우팅1

- React Router

  - https://reactrouter.com/en/main
  - `npm install react-router-dom@6`

  ```js
  import "./App.css";
  //BrowerRouter import
  import { BrowserRouter } from "react-router-dom";

  function App() {
    return (
      //BrowserRouter 최상단 추가
      <BrowserRouter>
        <div className="App">
          <h2>App.js</h2>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
  ```

  ```js
  // route import
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  ```

  ```js
  // route 사용 방법
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
  </Routes>
  ```

  - Link 태그를 사용하여 페이지 전환하기

  ```js
  import { Link } from "react-router-dom";

  const RouteTest = () => {
    return (
      <>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/diary"}>Diary</Link>
        <br />
        <Link to={"/new"}>New</Link>
        <br />
        <Link to={"/edit"}>Edit</Link>
        <br />
      </>
    );
  };

  export default RouteTest;
  ```

# 7-3 페이지 라우팅 2

- React Router Dom의 유용한 기능

  - REACT ROUTER V6
    - react에서 csr기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리
    1. Path Variable -> useParams
    2. Query String -> useSearchParams
    3. Page Moving -> useNavigate

- path variable

  - useParams 사용

  ```js
  //App.js
  <Route path="/diary/:id" element={<Diary />} />

  //Diary.js
  import { useParams } from "react-router-dom";

  const Diary = () => {
    const { id } = useParams();
    ...

  }
  ```

- Query String

  - 웹 페이지에 데이터를 전달하는 가장 간단한 방법
  - `/edit?id=10&mode=dark`

  ```js
  import { useSearchParams } from "react-router-dom";

  const Edit = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    console.log("id: ", id);

    const mode = searchParams.get("mode");
    console.log("mode: ", mode);

    return (
      <div>
        <button onClick={() => setSearchParams({ who: "jungmin" })}>
          QS 바꾸기
        </button>
      </div>
    );
  };
  ```

- Page Moving

  - useNavigate 사용
  - 굳이 링크를 클릭 안 해도 페이지를 바꿀 수 있게 해 줌

  ```js
  import { useNavigate, useSearchParams } from "react-router-dom";

  const Edit = () => {
    const navigate = useNavigate();

    return (
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      ></button>
    );
  };
  ```

# 7-4 프로젝트 기초공사

1. 폰트 세팅 - google web fonts를 이용한 프로젝트에 사용되는 폰트 세팅
2. 레이아웃 세팅 - 모든 페이지에 반영되는 레이아웃 세팅
3. 이미지 에셋 세팅 - 감정 이미지들을 프로젝트에서 불러와 사용할 수 있는 환경 세팅
4. 공통 컴포넌트 세팅 - 모든 페이지에 공통으로 사용되는 버튼, 헤더 컴포넌트 세팅

```js
//App.js
// process.env.PUBLIC_URL -> 어느 위치에 있던 public 디렉토리를 지정함
<img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
```

```js
//MyButton.js

// 클래스 이름을 타입에 따라 동적으로 바꾸기.
// ex) MyButton MyButton_positive
<button
  className={["MyButton", `MyButton_${type}`].join(" ")}
  onClick={onClick}
>
  {text}
</button>;

// 이상한 타입을 Props로 받아도 default로 유지하기
const btnType = ["positive", "negative"].includes(type) ? type : "default";
```

# 7-5 프로젝트 기초공사 2

1. 상태 관리 세팅하기 - 프로젝트 전반적으로 사용될 일기 데이터 State 관리 로직 작성하기
2. 프로젝트 State Context 세팅하기 - 일기 데이터 State를 공급할 Context를 생성하고 Provider로 공급하기
3. 프로젝트 Dispatch Context 세팅하기 - 일기 데이터 State의 Dispatch 함수들을 공급할 Context를 생성하고 Provider로 공급하기

```js

// useReducer로 상태 관리
// DiaryStateContext로 일기 데이터의 상태를 공급
// DiaryDisapatchContext로 일기 데이터의 상태의 dispatch함수를 공급

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break; //switch문은 default까지 자동 실행. 즉 default실행 원하지 않으면 break작성.
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext(); //Dispatch함수 공급

function App() {
  //useReducer의 기본 형태
  //const [state, dispatch] = useReducer(reducer, initialState);
  // -> state는 앞으로 컴포넌트에서 사용할 수 있는 상태, dispatch는 액션을 발생시키는 함수
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0); //data의 id
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={(onCreate, onEdit, onRemove)}>
          ....
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
```

# 7-6 HOME 구현하기

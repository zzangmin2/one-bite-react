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

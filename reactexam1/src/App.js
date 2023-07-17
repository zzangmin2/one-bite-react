// import './App.css';
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
    const number = 5;

    const counterProps = {
        a: 1,
        b: 2,
        c: 3,
        initialValue: 5,
    }
  return (
    // <div className="App">
      <Container>
        <div>
          <MyHeader />
          <Counter {...counterProps} />
        </div>
      </Container>
  );
}

export default App;

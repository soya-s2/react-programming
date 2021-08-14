import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h1>동작 중!</h1>
    </>
  );
}

export default App;

/* 
리액트 컴포넌트에서 요소 여러 개를 하나의 요소로 감싸주어야 한다.
그것은 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때,
효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 하기 때문이다.

★ 이를 위해 <div>, <Fragment> = <>로 감싸줄 수 있다.
*/
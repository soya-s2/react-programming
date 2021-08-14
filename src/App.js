import React from 'react';
import './App.css';

function App() {
  const name = undefined;
  return name;
}

export default App;

/*
Error: App(...): Nothing was returned from render. 라는 오류가 발생한다.
리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 된다.
*/
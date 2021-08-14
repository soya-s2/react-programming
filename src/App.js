import React from 'react';
import './App.css';

function App() {
  const name = undefined;
  return name;
  // return name || '값이 undefined입니다.'; -> 이렇게 하면 방지 가능.
}

export default App;

/*
Error: App(...): Nothing was returned from render. 라는 오류가 발생한다.
리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 된다.

또한 JSX 내부에서 undefined를 return <div>{name}</div>처럼 렌더링하는 것은 가능하다.

undefined일 때 보여주고 싶은 문구가 있다면
return <div>{name || '리액트'}</div>와 같이 쓰면 된다.
*/
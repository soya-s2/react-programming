import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <div className="react">{name}</div>
      <input /> 
    </>
  );
}

export default App;

/* 
line 9의 <input />과 같은 것을 self-closing tag라고 하며,
태그를 선언하면서 동시에 닫을 수 있다.
또한 JSX 문법에서는 input, br 등을 꼭 닫아야 한다.
*/
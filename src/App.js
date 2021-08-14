import React from 'react';

function App() {
  const name = '리액트';
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성함.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 // 단위를 생략하면 px로 지정됨.
  };
  return <div style={style}>{name}</div>;
}

export default App;

// style 객체를 미리 선언하고 div의 style 값으로 지정한 것이다.
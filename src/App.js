import React from 'react';

function App() {
  const name = '리액트';
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}
    >
      {name}
    </div>
  );
}

export default App;

// style 객체를 미리 선언하지 않고 바로 style 값을 지정한 것이다.
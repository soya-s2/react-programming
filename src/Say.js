import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;

/* <h1 style={{ color }} 에서의 { color }는
{ color: color }, { color: 'red' }와 같다.
ES6에서의 단축 프로퍼티이며, { color }로 쓸 시   
키를 변수명으로 자동 생성해준다. 

위의 코드에서는 setColor('red')로
color = 'red'가 되고,
{ color }로 스타일을 지정했으므로
{ color: color('red') }가 되는 것이다. */
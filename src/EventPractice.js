import React, { useState } from 'react';

import React from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  }
  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  }
  return (
    <div>
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username} // value에 message를 설정
        onChange={onChangeUsername}
        />
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message} // value에 message를 설정
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default EventPractice;
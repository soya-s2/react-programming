import React, { useState } from 'react';

const EventPractice = () => {
  // useState를 통한 state에 문자열이 아닌 객체를 넣어본다.
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존 form 내용을 여기에 복사한다.
      [e.target.name]: e.target.value // 원하는 값을 덮어 씌운다. 
      // 즉 기존의 초깃값을 유지하면서 두 input중 내용에 변화가 있는 이벤트 대상만 변경된다.
    };
    setForm(nextForm); // form 값을 덮어 씌운다.
  }
  const onClick = () => { 
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    })
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
        onChange={onChange}
        />
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message} // value에 message를 설정
        onChange={onChange}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
};

export default EventPractice;
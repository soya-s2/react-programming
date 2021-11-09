import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

/*
useState를 여러 번 사용하는 것이다.
useState 함수는 하나의 상태 값만 관리할 수 있으므로
관리해야 할 상태가 여러 개라면 useState를 여러 번 사용한다.

위 코드는 name, nickname이 ''로 초기화되어 있고,
onChange 이벤트가 발생 시
각각의 onChangeName, onChangeNickname 이벤트가 발생한다.
이벤트는 name, nickname 값을 해당 input 요소의 value로 리렌더링하고,
그것과 동시에 <b>이름: </b> {name}, <b>닉네임: </b> {nickname} 부분도 변한다.
동시에 변하는 부분은 onChange 이벤트의 특성이다.
*/
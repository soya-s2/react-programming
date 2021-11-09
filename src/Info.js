import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  /* useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 하는 Hooks이다. */
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });


  /* ------------------------------------------------------------------------
  1. useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,
  업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 빈 배열을 넣어주면 된다. 
  ---------------------------------------------------------------------------
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);
  ---------------------------------------------------------------------------*/


  /* ------------------------------------------------------------------------
  2. 특정 값이 업데이트될 때만 실행하고 싶다면, 위의 <1> 코드에서
  두 번째 파라미터로 검사하고 싶은 값을 배열 안에 넣어주면 된다.
  그렇게 하면, 해당 값이 바뀔 때만 useEffect 함수 내부를 실행한다.
  검사하고자 하는 값은 state를 넣어도 되고, props로 전달받은 값을 넣어도 된다.
  ---------------------------------------------------------------------------
  useEffect(() => {
    console.log(name);
  }, [name])
  ---------------------------------------------------------------------------*/


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
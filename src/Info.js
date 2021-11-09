import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

/* ------------------------------------------------------------------------
  3. 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 수행하고 싶은 작업이 있다면
  useEffect에서 뒷정리(cleanup) 함수를 반환해야 한다.
  컴포넌트가 나타날 때 effect, 사라질 때 cleanup이 나타난다.

  렌더링될 때마다 뒷정리 함수가 계속 나타나며, 
  뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여준다.
  언마운트될 때만 뒷정리 함수를 호출하고 싶다면 
  useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣는다.
---------------------------------------------------------------------------*/
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);



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
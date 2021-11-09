import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  
  /* 데이터 추가 */
  const onClick = () => {
    const nextNames = names.concat({ 
      /* 
      push가 아닌 concat을 쓰는 이유는
      리액트 컴포넌트의 성능 최적화를 위한 불변성 유지를 위해서이다.
      즉 기존 상태를 그대로 두면서 새로운 값으로 설정해야 한다.
      */
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };

  /* 데이터 제거 */
  /* 이 부분도 불변성을 유지해야 하므로 내장 함수인 filter를 사용한다 */
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  // 2. 매개변수로 전달된 id와 각 names의 name.id가 같지 않은 경우만 새로운 배열로 반환하고 names를 업데이트한다.

  const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
  // 1. 각 li 요소에 더블클릭 이벤트를 설정하고, 해당 li의 name.id를 매개변수로 전달한다.

  return (
  <div>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <ul>{nameList}</ul>
  </div>
  );
};

export default IterationSample;

/* 
반복되는 데이터의 렌더링, 유동적인 배열 다루기,
컴포넌트 배열의 유일한 key 값 설정 등을 공부했다.
배열 변형 시 concat, filter 등 배열 내장 함수를 활용하여
새 배열을 만든 후 이를 새로운 상태로 설정해야 한다.
*/
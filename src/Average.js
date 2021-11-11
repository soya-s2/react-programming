import React, { useState, useMemo }  from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  }

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);
  /* 
  useMemo는 메모이제이션된 값(이전 연산 값을 기억하여 재연산하지 않는 것)을 반환한다.
  list 배열의 내용이 추가될 때만 getAverage 함수가 호출된다.
  */

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg} 
      </div>
    </div>
  );
};

export default Average;

/*
input 태그에서 onChange가 일어날 때,
state 값이 변하므로 리렌더링되고,
계속 평균값을 계산하게 된다. 
이는 불필요한 연산이다.

useMemo Hook을 사용하면 최적화가 가능하다.
1. 특정 값이 변할 때만 연산을 실행함
2. 바뀌지 않았다면 연산 결과를 재사용
*/
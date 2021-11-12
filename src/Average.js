import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
  ); // number 혹은 list가 바뀌었을 ㄹ때만 함수 생성

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
useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를,
두 번째 파라미터에는 배열을 넣는다.
이 배열은 어떤 값이 바뀌었을 때 함수를 새로 생성하는지를 명시한다.

비어 있는 배열을 넣게 되면 컴포넌트 초기 렌더링 시 만들어진 함수를 계속 재사용하고,
배열에 내용을 넣게 되면 해당 값이 바뀌거나 추가될 때마다 새로 만들어진 함수를 사용한다.
이것을 '함수 내부에서 상태 값에 의존한다'고 한다.

기존 값을 찾지 않고 설정만 바꾸는 경우는 빈 배열을 넣어도 되지만,
기존 값을 찾아서 새로운 값을 생성할 때는 꼭 넣어주어야 한다.
(ex) number와 list를 확인하여 nextList를 만들 때
*/

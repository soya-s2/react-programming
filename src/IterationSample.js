import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map(name => <li>{name}</li>); // 데이터 배열을 컴포넌트 배열로 변환하는 부분
  /*
  function (name) {
    return <li>{name}</li>
  }
  */
  return (
    <ul>
      {nameList}
    </ul>
  );
};

export default IterationSample;

/* 
위의 코드를 실행 시 콘솔에서 
Warning: Each child in a list should have a unique "key" prop.
오류를 만날 수 있다.

리액트에서 key는 컴포넌트 배열 렌더링 시
어떤 원소에 변동이 있었는지 알아내기 위해 쓴다.
유동적인 데이터를 다룰 때, 원소를 생성, 제거, 수정할 수도 있기 때문.
key가 없다면 Virtual DOM을 비교하는 과정에서 리스트를 순차 비교하지만 
key가 있다면 이 값을 사용해서 어떤 변화가 일어났는지 더 빠르게 알 수 있다.
*/
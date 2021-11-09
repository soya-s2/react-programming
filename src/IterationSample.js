import React from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <ul>
      {nameList}
    </ul>
  );
};

export default IterationSample;

/* 
더이상 key 에러를 표시하지 않는다.
컴포넌트 배열 각각에 key가 설정되었기 때문이다.
key 설정은 컴포넌트의 props를 설정하는 것과 같은 방식으로 하면 된다.

※ 적절한 고유 값이 없을 때만 index를 key로 설정한다.
index를 key로 사용하면 배열 변경 시 효율적인 리렌더링이 불가하기 때문이다.
*/
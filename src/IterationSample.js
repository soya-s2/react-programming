import React from 'react';

const IterationSample = () => {
  return (
    <ul>
      <li>눈사람</li>
      <li>얼음</li>
      <li>눈</li>
      <li>바람</li>
    </ul>
  );
};

export default IterationSample;

/* 
<li>...</li>가 반복된다.
만약 코드가 더 복잡하다면 
이것을 하나하나 복사하는 것은 매우 비효율적이다.
다음 코드부터는 이런 반복적인 내용을
효율적으로 보여주고 관리하는 방법을 알아본다. 
*/
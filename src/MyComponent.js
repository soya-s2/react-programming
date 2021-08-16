import React from 'react';

const MyComponent = (props) => {
  const { name, children } = props; // 우항의 키 값이 좌항의 변수명과 매칭된다.
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;

import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    /*
    <div className={styles.wrapper}>
    */
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;

/* 
CSS Module이 적용된 스타일 파일을 불러오면 객체를 전달받는다.
CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있다.
styles를 확인하면 { wrapper: "CSSModule_wrapper_1SbdQ" }와 같은 결과가 나타난다.

이 고유한 클래스 이름을 사용하려면 
클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.className} 형태로 전달하면 된다.
:global을 사용하여 전역적으로 선언한 클래스는 그냥 쓴다.

두 개 이상의 클래스를 쓰려면
<div className={`${styles.wrapper} ${styles.inverted}`}>와 같이 쓴다.
이 문법은 ES6의 템플릿 리터럴이다.
또는 className={[styles.wrapper, styles.inverted].join(' ')}으로도 쓸 수 있다.
*/

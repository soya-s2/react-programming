import React, { useReducer } from 'react';

/* 
useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라
다양한 상태를 다른 값으로 업데이트 하고 싶을 때 사용하는 Hook이다.
리듀서는 현재 상태, 업데이트를 위한 액션 값을 전달받아 
새로운 상태를 반환하는 함수이다.
리듀서 함수에서 새로운 상태를 만들 때 반드시 불변성을 지켜줘야 한다.

useReducer를 사용했을 때의 큰 장점은 
컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다.
*/

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  /* 
  useReducer의 첫 번째 파라미터에는 리듀서 함수를,
  두 번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.
  state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수이다.
  dispatch(action) 형태로 함수 안에 액션 값을 넣어주면 리듀서 함수가 호출되는 구조이다.
  */
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  /* 
  state의 초깃값은 { value: 0 } 이었으나 
  { value: state.value + 1 (또는 -1) }에 의해
  { value: n }으로 변동되기도 한다. 
  이는 새로운 상태가 { value: n }으로 반환된 것이므로
  state = { value: n }과 동일하고, state.value가 리렌더링되는 것과 같다. 
  */

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;

/*
dispatch({ type: 'INCREMENT' })의 경우
reducer(state, action = { type: 'INCREMENT' })로 전달하는 것과 같고,
결국 dispatch는 액션을 지정해서 reducer를 실행시키는 것이다.
*/

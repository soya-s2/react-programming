import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 });
            // 비동기적으로 상태를 업데이트 하기 때문에 number값이 바로 바뀌지 않는다.
            // 이를 해결하기 위한 방법으로는 this.setState에 인자를 함수로 넣어주는 것이 있다.

            /*
            this.setState((prevState, props) => {
              return {
                // 업데이트 하고 싶은 내용
              }
            }) 
            */
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

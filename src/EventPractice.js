import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  // state는 컴포넌트의 내장 객체이다. 
  // https://homzzang.com/b/react-9

  constructor(props) {
    super(props);
    /* 
    함수가 호출될 때 this는 호출부에 따라 결정되는데,
    클래스의 임의 메서드가 이벤트로 등록될 때 메서드와 this의 관계가 끊어진다.
    그러므로 임의 메서드가 this를 컴포넌트 자신으로 제대로 가리키게 하기 위해서는
    메서드를 this와 바인딩하는 작업이 필요하고, 그렇지 않다면 undefined를 가리킨다.
    bind() 메서드로 this를 '고정'시킬 수 있다.
    */
    // https://kamang-it.tistory.com/entry/JavaScript07this-this%EB%B0%94%EC%9D%B8%EB%93%9C%ED%8E%B8bindcallapply

    /*
    메서드 바인딩은 생성자 메서드에서 하는 것이 정석이기는 하다.
    하지만 새 메서드를 만들 때마다 constructor를 수정해야 하기 때문에 불편할 수 있다.
    이것을 해결하기 위해 바벨의 transform-class-properties 문법을 사용한다.
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // 함수를 미리 만들어 전달하는 것이 가독성이 훨씬 높다.
  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message} // value에 message를 설정
        onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
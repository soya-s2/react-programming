import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }
 
  // 바벨의 transform-class-properties 문법, 
  // 화살표 함수 형태로 메서드를 정의한다.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      /*
      객체 안에서 키를 []로 감싸면 []에 해당하는 레퍼런스의 실제 값이 키 값으로 사용된다.
      즉 input에서 name을 username으로 지정했을 경우,
      [username]: e.target.value -> (this.state.)username = e.target.value가 된다. (setState에 의해)
      결론적으로 input의 name 속성값을 변경함으로써, 그것을 e.target.name으로 활용하고,   
      그 이름을 this.state.~~으로 설정 가능하다.
      */ 
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={this.state.username} // value에 message를 설정
        onChange={this.handleChange}
        />
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={this.state.message} // value에 message를 설정
        onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;

// input이 여러 개인 경우, e.target.name을 활용할 수 있다.
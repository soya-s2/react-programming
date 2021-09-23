import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  // state는 컴포넌트의 내장 객체이다. 
  // https://homzzang.com/b/react-9
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message} // value에 message를 설정
        onChange={
          (e) => {
            this.setState({
              message: e.target.value // 입력할 때마다 message를 이벤트 타겟의 value로 변경
            })
            console.log(this); // EventPractice {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
          }
          }
        />
        <button onClick={
          () => {
            alert(this.state.message); // 버튼을 클릭하면 state에 담긴 message를 알림
            this.setState({
              message: '' // 공백으로 초기화
            });
          }
        }>확인</button>
      </div>
    );
  }
}

export default EventPractice;
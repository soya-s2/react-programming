import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
  }

  render() {
    return (
      <div>
        <input
        ref={(ref) => this.input=ref} 
        // ref props를 콜백 함수로 설정하게 되면, DOM 엘리먼트나 Class 인스턴스를 인자(여기서는 ref)로 받는다. 
        // 즉 this.input이라는 멤버 변수는 DOM 엘리먼트 자체를 가리키게 되고, this.input으로 접근 가능하다.
        type="password"
        value={this.state.password}
        onChange={this.handleChange}
        className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>

      </div>
    );
  }
}

export default ValidationSample;

/* 
만약 콜백 함수 방식이 아닌 
input = React.createRef();
<input ref={this.input}>으로 설정한 경우 
컴포넌트에 대한 접근은 this.input.current로 해야 한다.
*/
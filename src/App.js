import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로 이동하기
        </button>
      </div>
    );
  }
}

export default App;

/* 
ref를 사용 시 ref를 사용하지 않고 기능을 구현할 수 있는지를 먼저 고려해야 한다.
컴포넌트끼리 데이터를 공유할 때는 ref가 아닌 부모<->자식 흐름이 기본 원칙이다.
이것은 redux와 context API와 관련 있다.
함수형 컴포넌트에서는 useRef라는 Hook 함수를 사용해서 ref를 사용한다.

ScrollBox 컴포넌트에 ref를 달아 
ScrollBox 내부의 scrollToBottom 메서드를 사용할 수 있게 하였다.
이것은 컴포넌트 내부 메서드를 컴포넌트의 외부에도 사용하기 위함이다.

onclick = {this.scrollBox.scrollToBottom}이 아닌 
★ onclick = {() => this.scrollBox.scrollToBottom()}으로 작성하는 이유 ★는
컴포넌트의 초기 렌더링 시 this.scrollBox의 값은 undefined이므로 
화살표 함수 문법을 사용해 새 함수를 만들어 오류가 발생하는 것을 방지하기 위해서이다.
화살표 함수로 만들게 되면 버튼 클릭 이전에는 실행되지 않는다.
그러므로 this.scrollBox가 undefined여도 상관 없다.
(이미 한 번 렌더링이 되었다.)

-->
import React, {Component} from 'react';
import ScrollBox from './component/ScrollBox';

class App extends Component{
  componentWillMount() {
    console.log("App 실행");
  }
  componentDidMount() {
    console.log("App 등록완료");
  }

  render(){
    return(
      <div>
        <div ref={ref => {
          console.log("callback REF 등록완료");
          return this.testRef = ref
        }}></div>
        <ScrollBox ref={(ref) => {
          console.log("ScrollBox의 callback ref 등록완료");
          return this.scrollBox=ref
        }}/>
        <button onClick={()=> this.scrollBox.ScrollToBottom()}>
          맨 밑으로
        </button>
        <div onClick={console.log("버튼 렌더링 완료")}></div>
      </div>
    );
  }
}

export default App;

/*
"버튼 렌더링 완료" 
"callback REF 등록완료"
"ScrollBox의 callback ref 등록완료" 
위 순서로 콘솔 출력된다.

즉 ref의 콜백함수는 인스턴스의 마운트(컴포넌트의 렌더링) 이후 실행된다.
*/

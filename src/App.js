function App() {
  const name = '리액트';
  // const number = 0;
  return (
    <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
  );
  // return number && <div>내용</div>; -> 이것은 화면에 0으로 나타난다.
}

/*
function App() {
  const name = '뤼왝트';
  return (
    <div>{name === '리액트' ? (<h1>리액트입니다.</h1>) : null}</div>
  );
}

위와 같이 코드를 작성하고 나면, '뤼액트'일 때는 아무 것도 보이지 않으며
'리액트'일 때는 렌더링한다.
return 값이 false를 렌더링할 때는 아무것도 나타나지 않는 원리이다.
※ falsy한 값인 0은 예외적으로 화면에 나타난다.
*/

export default App;
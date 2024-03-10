import SplitBox from "./features/nestedComponent/SplitBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SplitBox />
    </div>
  );
}

export default App;

/**
 * 중첩된 컴포넌트 만들기
 * 4분할된 컴포넌트 만들기
 * 각각 분할된 화면을 2분할로 다시 컴포넌트 만들기
 */

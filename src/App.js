import Test from "./Test";
import Post from "./Post";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import "./App.css";
import "./Post.css";
import "./Box1.css";
import "./Box2.css";
import "./Box3.css";

function App() {
  return (
    <div className="App">
      <Post />
      <Test />
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
}

export default App;

/**
 * 중첩된 컴포넌트 만들기
 * 4분할된 컴포넌트 만들기
 * 각각 분할된 화면을 2분할로 다시 컴포넌트 만들기
 */

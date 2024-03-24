import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    // Outlet : 내 자식요소 Router를 보여줄 Component
    <div className="App">
      <header className="header">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="nested"> nested </Link>
            </li>
            <li>
              <Link to="hooks">Hooks </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

/**
 * 중첩된 컴포넌트 만들기
 * 4분할된 컴포넌트 만들기
 * 각각 분할된 화면을 2분할로 다시 컴포넌트 만들기
 */

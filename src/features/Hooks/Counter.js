// State는 갱신되면 Component rerender 발생
import { useState, useEffect } from "react";
import "./Counter.css";
export default function Counter() {
  // [getter,setter] = useState(initial);
  const [count, setCount] = useState(0);
  // count+=1 ;

  const increase = () => {
    console.log("increase");
    setCount((count) => ++count);
    console.log("count", count);
  };
  const decrease = () => {
    console.log("decrease");

    setCount((count) => --count);
    console.log("count", count);
  };

  // [] dependencies 영역에 선언된 state가 변경되면 실행됨

  // 과제
  // 카운터를 이용한 계산
  // 숫자 증가는 10까지만 제한 감소는 -10까지만 제한
  // +,- 외에 곱하기 나누기 기능 추가(2로만 곱하거나 나누면 됨)
  // Router 복습하기

  useEffect(() => {
    if (count < -10) {
      setCount(-10); // 0보다 작으면 0으로 설정
    } else if (count > 10) {
      setCount(10); // 10보다 크면 10으로 설정
    }
  }, [count]); // count가 변경될 때마다 실행

  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
}

// State는 갱신되면 Component rerender 발생
import { useState, useEffect } from "react";
import "./Counter.css";
export default function Counter() {
  // [getter,setter] = useState(initial);
  const [count, setCount] = useState(0);
  // count+=1 ;

  const increase = () => {
    console.log("increase");
    setCount((count) => {
      if (count >= 10) {
        return count;
      }
      return ++count;
    });
    console.log("count", count);
  };
  const decrease = () => {
    console.log("decrease");

    setCount(count - 1);
    console.log("count", count);
  };

  const multiply = () => {
    setCount(count * 2);
  };

  const divide = () => {
    setCount(count / 2);
  };

  // *과제*
  // 카운터를 이용한 계산
  // 숫자 증가는 10까지만 제한 감소는 -10까지만 제한
  // +,- 외에 곱하기 나누기 기능 추가(2로만 곱하거나 나누면 됨)
  // Router 복습하기

  // [] dependencies 영역에 선언된 state가 변경되면 실행됨
  // useEffect(() => { 변경될 조건 },[ 변경될 값 ]);

  useEffect(() => {}, []);

  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
      <button onClick={multiply}>x</button>
      <button onClick={divide}>/</button>
      {/* <span>{count}</span> */}
    </div>
  );
}

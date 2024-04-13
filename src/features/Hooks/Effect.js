import { useEffect, memo } from "react";
//
// export default는 한 파일에 한번만 선언 가능
// default export
export default memo(function Effect({ onToggle }) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button onClick={onToggle}>toggle</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          marginTop: "20px",
        }}
      >
        <Row count={0} />
        <Row count={1} />
        <Row count={2} />
        <Row count={3} />
        <Row count={4} />
      </div>
    </div>
  );
});

/**
 * memo가 적용된 컴포넌트는 렌더링이 다시 되지 않음
 * 다만, props로 받는 state에 변화가 있을때는 렌더링이 다시 발생함
 */
const Row = function ({ count }) {
  return (
    <div style={{ height: "50px", border: "solid 1px #ccc" }}>{count}</div>
  );
};
// export를 안하면 외부에서 사용 못함
// named export - 한 파일에 여러개 선언 가능함
// 아래 처럼 하면 컴포넌트를 추가 선언할 수 있음
export function Layer({ toggle, count }) {
  // 기본적으로 effect는 mounted(생성)단계에서 1번 동작
  // effect는 여러개 선언 가능하고 의존성 배열이 비어있으면 첫 mounted단계에서만 동작
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("destroy");
    }; // destroy - 컴포넌트가 제거될 때 동작
  }, []);

  useEffect(() => {
    console.log("toggle update!");
    if (toggle) {
      console.log("show Layer");
    } else {
      console.log("hide Layer");
    }
  }, [toggle]);
  return (
    <div
      style={{
        display: toggle ? "block" : "none",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "300px",
        border: "solid 1px #666",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.25)",
        background: "#fff",
      }}
    >
      Layer{count}
    </div>
  );
}

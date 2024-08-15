import "./Box.css";
import InnerBox from "./InnerBox";

// props (properties)
// 컴넌트가 외부에서 주입 받는 속성을 의미
// 기본적으로 children 속성은 가지고 있음
// <Box>이 부분이 children</Box>
// function Box({props}) {}
// const props = {children: ... }
// const
export default function Box({ bgColor, title }) {
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <div>{title}</div>
      <div className="innerBoxWrapper">
        <InnerBox bgColor="#ccc">inner1</InnerBox>
        <InnerBox bgColor="#fff">inner2</InnerBox>
      </div>
    </div>
  );
}

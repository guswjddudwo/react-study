import InnerBox from "../features/NestedComponent/InnerBox";
import "./Box.css";
export default function Box(title, bgColor) {
  return (
    <div className="box" style={{ backgroundColor: bgcolor }}>
      <div>{title}</div>
      <div className="innerBoxwrapper">
        <InnerBox>InnerBox1</InnerBox>
        <InnerBox>InnerBox2</InnerBox>
      </div>
    </div>
  );
}

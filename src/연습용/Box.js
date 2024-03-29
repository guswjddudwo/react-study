import InnerBox from "./InnerBox";
import "./Box.css";
export default function Box({ bgColor, title }) {
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <div>{title}</div>
      <div className="innerBoxwrapper">
        <InnerBox bgColor={"purple"}>InnerBox1</InnerBox>
        <InnerBox bgColor={"blue"}>InnerBox2</InnerBox>
      </div>
    </div>
  );
}

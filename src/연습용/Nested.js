import "./Nested.css";
import Box from "./Box";
export default function Nested() {
  return (
    <div className="boxWrapper">
      <Box title="box1" bgColor="red" />
      <Box title="box2" bgColor="orange" />
      <Box title="box3" bgColor="yellow" />
      <Box title="box4" bgColor="green" />
    </div>
  );
}

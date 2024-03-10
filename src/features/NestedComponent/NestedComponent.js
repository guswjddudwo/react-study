import Box from "./Box";
import "./NestedComponent.css";
export default function NestedComponent() {
  return (
    <div className="boxWrapper">
      <Box title="box1" bgColor="red" />
      <Box title="box2" bgColor="blue" />
      <Box title="box3" bgColor="green" />
      <Box title="box4" bgColor="pink" />
    </div>
  );
}

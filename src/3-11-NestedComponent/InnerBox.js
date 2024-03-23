import "./InnerBox.css";
export default function InnerBox({ childern, bgColor }) {
  return (
    <div className="innerBox" style={{ backgroundColor: bgColor }}>
      Inner1{childern}
    </div>
  );
}

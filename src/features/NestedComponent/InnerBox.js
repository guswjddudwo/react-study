import "./InnerBox.css";
export default function InnerBox({ children, bgColor }) {
  return (
    <div className="inner" style={{ backgroundColor: bgColor }}>
      InnerBox {children}
    </div>
  );
}

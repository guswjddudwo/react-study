export default function Button({ children, onClick }) {
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
}

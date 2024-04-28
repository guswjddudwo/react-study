import "./TodoItem.css";
export default function TodoItem({
  title,
  onClickEdit,
  onClickDelete,
  readOnly = true,
  onChange,
}) {
  return (
    <li className="todo-item">
      <div>
        <input
          type="text"
          value={title}
          readOnly={readOnly}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onClickEdit}>edit</button>
        <button onClick={onClickDelete}>delete</button>
      </div>
    </li>
  );
}

import "./TodoItem.css";
export default function TodoItem({
  title,
  onClickEdit,
  onClickDelete,
  isEdit = false,
}) {
  return (
    <li className="todo-item">
      <div>
        <input type="text" value={title} readOnly={!isEdit} />
      </div>
      <div>
        <button onClick={onClickEdit}>edit</button>
        <button onClick={onClickDelete}>delete</button>
      </div>
    </li>
  );
}

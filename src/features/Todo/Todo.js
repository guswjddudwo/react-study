import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Children } from "react";

export default function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([
    { title: "해결" },
    { title: "할 수 있다..!" },
  ]);

  // list = {title: ''}
  const handleInputChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleClickAdd = () => {
    setTodoList({ title: "" });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          columnGap: "10px",
        }}
      >
        <Input value={todoTitle} onChange={handleInputChange} />
        <Button onClick={handleClickAdd}>add</Button>
      </div>
      <ul>
        {todoList.map((list) => (
          <li>{list.title}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * 과제
 * Button 컴포넌트에 onClick 이벤트 적용
 * handleCilckAdd 함수를 만들고 Button을 클릭하면,
 * input에 적용된 title을 todolist에 추가
 */

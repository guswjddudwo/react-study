import { useState, useEffect, useCallback } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Children } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4, validate } from "uuid";

export default function Todo() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);

  // list = {title: ''} 입력
  const handleInputChange = (event) => {
    setTodoTitle(event.target.value);
  };

  // 항목 추가
  const handleClickAdd = () => {
    const title = todoTitle.trim();
    if (title)
      setTodoList((todoList) => [
        ...todoList,
        { title, id: uuidv4(), readOnly: true },
      ]),
        setTodoTitle("");
  };

  // 수정
  const handleClickEdit = (id) => () => {
    console.log("edit");
    setTodoList((list) =>
      list.map((item) => ({ ...item, readOnly: !(item.id === id) }))
    );
  };
  const handleChangeTitle = (id) => (event) => {
    setTodoList((list) =>
      list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, title: event.target.value };
      })
    );
  };

  // 삭제
  const handleClickDelete = (id) => () => {
    console.log("delete", id);
    setTodoList((list) => list.filter((item) => item.id !== id));
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
          <TodoItem
            key={list.id}
            title={list.title}
            readOnly={list.readOnly}
            onClickEdit={handleClickEdit(list.id)}
            onClickDelete={handleClickDelete(list.id)}
            onChange={handleChangeTitle(list.id)}
          />
        ))}
      </ul>
    </div>
  );
}

/**
 * 과제
 * Button 컴포넌트에 onClick 이벤트 적용
 * handleClickAdd 함수를 만들고 Button을 클릭하면,
 * input에 적용된 title을 todolist에 추가
 */

/**
 * 24-04-21 과제
 * todo edti 모드 구현
 * handleClickEdit를 통해 받은 id에 해당하는 input만 readOnly={fals}로 활성화
 * input에 수정된 값을 입력하고 확인을 누르면 title이 업데이트 되어야함
 */

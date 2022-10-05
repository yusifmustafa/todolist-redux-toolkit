import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todo = useSelector((state) => state.todo.todos);
  console.log("todo", todo);
  return (
    <div>
      {(todo ? todo : []).map((item, key) => (
        <ul key={item.id} className="list-group">
          <TodoItem title={item.title} id={item.id} />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;

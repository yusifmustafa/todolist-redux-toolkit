import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((item, key) => (
        <ul key={item.id} className="list-group">
          <TodoItem id={item.id} title={item.title} age={item.age} />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;

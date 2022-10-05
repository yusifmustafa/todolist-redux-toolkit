import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todo = useSelector((state) => state.todo.todos);
  console.log('todo',todo)
  return (
    <div>
      {todo.map((item, key) => (
        <ul key={item.id} className="list-group">
          <TodoItem id={item.id} title={item.title} />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;

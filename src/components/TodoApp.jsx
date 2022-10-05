import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, todoActions } from "../features/todoSlice";
import "./TodoApp.css";
const TodoApp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.addTodo(input));
  };

  return (
    <div className="todo-form">
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add todo.."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default TodoApp;

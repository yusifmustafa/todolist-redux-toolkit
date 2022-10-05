import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todoSlice";
import "./TodoApp.css";
const TodoApp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(todoActions.addTodo(input));
  };

  return (
    <>
      <div>
        
      </div>
      <div className="todo-form">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add todo.."
          onChange={(e) => setInput(e.target.value)}
          value={input || ""}
        />
        <button onClick={onSubmit} className="btn btn-primary">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoApp;

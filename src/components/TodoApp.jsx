import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todoSlice";
import { useSelector } from "react-redux";
import "./TodoApp.css";
const TodoApp = () => {
  
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  
  const edit = useSelector((state) => state.todo.isEditing);
  const editData = useSelector((state) => state.todo);
  console.log("edittt",edit);

  useEffect(() => {
    if(edit){
      setInput(editData.todos[0]?.title);
      console.log('useEffect input',input);
    }
  }, [edit])
  
  
   
  
 
 

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return false;
    }
    dispatch(todoActions.addTodo(input));
    setInput("");
  };

  return (
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
  );
};

export default TodoApp;

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todoSlice";
import { useSelector } from "react-redux";
import "./TodoApp.css";
const TodoApp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const editData = useSelector((state) => state.todo.editingData);
  // const isEditing = useSelector((state) => state.todo.isEditing);
  console.log("edirrr", editData);

  useEffect(() => {
    console.log("dfdff", editData.isEditing);
    console.log(editData[0]?.title);
    setInput(editData[0]?.title);
  }, [editData]);

  console.log("todoAPp editData", editData);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return false;
    }

    if (editData.length === 0) {
      dispatch(
        todoActions.upsertTodo({
          type: "ADD",
          data: input,
        })
      );
      setInput("");
    } else {
      dispatch(
        todoActions.upsertTodo({
          type: "EDIT",
          data: editData.id,
        })
      );
    }
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

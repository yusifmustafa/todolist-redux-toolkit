import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todoSlice";

const TodoItem = ({ id, title, item }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(todoActions.deleteTodo(id));
  };
  const handleUptadeClick = () => {
    console.log("edit button clicked",id);
    dispatch(
      todoActions.upsertTodo({
        type: "EDIT",
        data: id,
      })
    );
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">{title}</span>
        <div className="buttons">
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
          <button className="btn btn-info" onClick={handleUptadeClick}>
            Edit
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, todoActions } from "../features/todoSlice";

const TodoItem = ({ id, title}) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
         {title}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

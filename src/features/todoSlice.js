import { createSlice } from "@reduxjs/toolkit";
// import { uuid } from "uuidv4";
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4());
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,

  reducers: {
    addTodo(state, action) {
      console.log("state", state);
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id === action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

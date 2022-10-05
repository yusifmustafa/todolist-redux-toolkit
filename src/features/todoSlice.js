import { createSlice } from "@reduxjs/toolkit";

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
        id: Date.now(),
        title: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

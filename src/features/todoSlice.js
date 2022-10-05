import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        age: action.payload,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Yusif Mustafa", age: 21 },
  { id: 2, title: "Binyatov Murad", age: 27 },
  { id: 3, title: "Ibrahim Aliakbarov", age: 19 },
  { id: 4, title: "Natiq Mustafa", age: 40 },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        age: action.payload.age,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;

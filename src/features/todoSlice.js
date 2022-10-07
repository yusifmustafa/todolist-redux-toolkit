import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
  todos: [],
  editingData: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,

  reducers: {
    upsertTodo(state, action) {
      if (action.payload.type === "ADD") { 
        const newTodo = {
          id: Date.now(),
          title: action.payload.input,
        };
        state.todos.push(newTodo);
      }
      if (action.payload.type === "EDIT") { 
        state.editingData = state.todos.filter(
          (item) => item.id === action.payload.data
        );
        if (action.payload.isEdit === true) {
          state.editingData[0].title = action.payload.dataValue;
        }
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

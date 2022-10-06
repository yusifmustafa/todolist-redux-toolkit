import { createSlice } from "@reduxjs/toolkit";
import { log } from "util";
const initialState = {
  isEditing: false,
  todos: [],
  editingData: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,

  reducers: {
    upsertTodo(state, action) {
      console.log("action payload data", action.payload.data);
      if (action.payload.type === "ADD") {
        state.isEditing = false;
        console.log("ADDDD");
        const newTodo = {
          id: Date.now(),
          title: action.payload.data,
        };
        state.todos.push(newTodo);
      }
      if (action.payload.type === "EDIT") {
        console.log("EDITTT");
        state.isEditing = true;

        state.editingData = state.todos.filter(
          (item) => item.id === action.payload.data
        );

        console.log("dataaa", state.todos);
      }

      // if (action.payload!==null) {
      //   console.log("add");
      //   const newTodo = {
      //     id: Date.now(),
      //     title: action.payload,
      //   };
      //   state.todos.push(newTodo);
      // } if(action.payload>0) {
      //   console.log("edit");
      //   state.isEditing = true;
      //   state.todos = state.todos.filter((item) =>
      //     item.id === action.payload ? action.payload : item
      //   );
      // }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    // state.type = action.payload.type;
    // const edit = state.todos;
    // console.log("hahahah",edit);
    //edit[0].title =
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;

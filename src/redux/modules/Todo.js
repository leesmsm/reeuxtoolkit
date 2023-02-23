// // 액션 변수 생성
// const ADD = "ADD";
// const DELETE = "DELETE";
// const ISDONE = "ISDONE";

// // dispatch 액션 함수 생성
// export const ADDTodo = (payload) => {
//   return {
//     type: ADD,
//     payload,
//   };
// };

// export const DELETETodo = (payload) => {
//   return {
//     type: DELETE,
//     payload,
//   };
// };

// export const ISDONETodo = (payload) => {
//   return {
//     type: ISDONE,
//     payload,
//   };
// };

// // default state
// const initialState = {
//   todo: [],
// };

// // reducer
// const Todo = (state = initialState, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return {
//         todo: [...state.todo, action.payload],
//       };
//     case DELETE:
//       const newArr = state.todo.filter((todo) => action.payload !== todo.id);
//       return {
//         todo: newArr,
//       };
//     case ISDONE:
//       const newArr2 = [...state.todo];
//       const idx = state.todo.findIndex((todo) => action.payload === todo.id);
//       newArr2[idx] = {
//         ...newArr2[idx],
//         isDone: !newArr2[idx].isDone,
//       };
//       return {
//         todo: newArr2,
//       };
//     default:
//       return state;
//   }
// };

// export default Todo;
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    toggleIsDone: (state, action) => {
      const idx = state.todo.findIndex((todo) => todo.id === action.payload);
      state.todo[idx].isDone = !state.todo[idx].isDone;
    },
  },
});

export const { addTodo, deleteTodo, toggleIsDone } = todoSlice.actions;

export default todoSlice.reducer;

// // 우리가 리덕스에 정보를 넣고싶을때 발생시키는 타입 종류 선언

// const ADD = "ADD";

// export const ADDTodo = (payload) => {
//   return {
//     type: ADD,
//     payload,
//   };
// };

// const initialState = {
//   todo: [
//     { id: 0, name: "항해" },
//     { id: 1, name: "리액트" },
//   ],
// };

// const todoList = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD:
//       return {
//         todo: [...state.todo, action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default todoList;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:4001/todos");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todo: [
      { id: 0, name: "항해" },
      { id: 1, name: "리액트" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;

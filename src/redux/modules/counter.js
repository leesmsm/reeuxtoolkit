// const PLUS = "PLUS";
// const MINUS = "MINUS";

// export const plusCount = (payload) => {
//   return {
//     type: PLUS,
//     payload,
//   };
// };

// export const minusCount = (payload) => {
//   return {
//     type: MINUS,
//     payload,
//   };
// };

// const initialState = {
//   count: 0,
// };

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case "PLUS":
//       return {
//         count: state.count + action.payload,
//       };
//     case "MINUS":
//       return {
//         count: state.count - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default counter;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addNumber = (number) => {
  return { type: "counter/plusCount", payload: number };
};

export const __addNumber = createAsyncThunk(
  "counter/__addNumber",
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(payload));
    }, 1000);
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    plusCount: (state, action) => {
      state.count += action.payload;
    },
    minusCount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const { plusCount, minusCount } = counterSlice.actions;
export default counterSlice.reducer;

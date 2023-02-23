// import { combineReducers, createStore } from "redux";
// import todoList from "../modules/addTodo";
// import counter from "../modules/counter";
// import Todo from "../modules/Todo";

// const rootReducer = combineReducers({
//   counter,
//   todoList,
//   Todo,
// });
// const store = createStore(rootReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter";
import todoListReducer from "../modules/addTodo";
import TodoReducer from "../modules/Todo";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    Todo: TodoReducer,
  },
});

export default store;

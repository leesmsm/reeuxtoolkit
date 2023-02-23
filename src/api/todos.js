//axios 요청이 들어가는 모든 모듈
import axios from "axios";

//조회
const getTodos = async () => {
  const response = await axios.get("http://localhost:4000/todos");
  return response.data;
};

//추가하는 axios 요청
const addTodo = async (newTodo) => {
  await axios.post("http://localhost:4000/todos", newTodo);
};

// ToDo를 삭제하는 axios 요청
const deleteTodo = async (id) => {
  const response = await axios.delete(`http://localhost:4000/todos/${id}`);
  return response;
};

// ToDo의 isDone 값을 변경하는 axios 요청
const toggleIsDone = async (id, isDone) => {
  const data = await axios.patch(`http://localhost:4000/todos/${id}`, {
    isDone,
  });
  return data;
};

export { getTodos, addTodo, deleteTodo, toggleIsDone };

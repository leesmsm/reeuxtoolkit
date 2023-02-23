import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToDoList from "../page/AddToDoList";
import CountNumber from "../page/CountNumber";
import Home from "../page/Home";
import TodoDetail from "../page/TodoDetail";
import TodoList from "../page/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CountNumber" element={<CountNumber />} />
        <Route path="/AddToDoList" element={<AddToDoList />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/TodoList/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

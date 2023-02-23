import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const TodoDetail = () => {
  const navigation = useNavigate();
  const params = useParams();
  const todos = useSelector((state) => state.Todo.todo);
  const todo = todos.filter((todo) => {
    return todo.id === +params.id;
  });
  return (
    <>
      <span>{todo[0]?.title}</span>
      <br />

      <span>{todo[0]?.content}</span>
      <BackButton onClick={() => navigation(-1)}>이전 버튼</BackButton>
    </>
  );
};

export default TodoDetail;

const BackButton = styled.div`
  background-color: #0077cc;
  color: #fff;
  padding: 20px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 300px;

  &:hover {
    background-color: #005ca3;
  }
`;

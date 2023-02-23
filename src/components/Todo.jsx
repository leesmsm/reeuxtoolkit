import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggleIsDone } from "../redux/modules/Todo";

const Todo = ({ id, title, content, isDone }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const DeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const isDoneHandler = (id) => {
    dispatch(toggleIsDone(id));
  };
  return (
    <TodoContainer>
      <TodoBox>
        <TodoTitle>{title}</TodoTitle>
        <TodoContent>{content}</TodoContent>

        <TodoButton onClick={() => navigation(`/TodoList/${id}`)}>
          상세보기
        </TodoButton>

        <TodoBtnBox>
          <TodoDeleteBtn onClick={() => DeleteHandler(id)}>
            삭제하기
          </TodoDeleteBtn>
          <TodoIsDoneBtn onClick={() => isDoneHandler(id)}>
            {isDone ? "취소" : "완료"}
          </TodoIsDoneBtn>
        </TodoBtnBox>
      </TodoBox>
    </TodoContainer>
  );
};

const TodoContainer = styled.button`
  width: 260px;
  height: 180px;
  border: 4px solid green;
  border-radius: 8px;
  list-style: none;
`;

const TodoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TodoTitle = styled.span`
  font-size: 30px;
`;
const TodoContent = styled.span``;

const TodoBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TodoDeleteBtn = styled.button`
  width: 49%;
  height: 2rem;
  border: 1px solid red;
  border-radius: 0.25rem;
  background-color: transparent;
`;
const TodoIsDoneBtn = styled.button`
  width: 49%;
  height: 2rem;
  border: 1px solid green;
  border-radius: 0.25rem;
  background-color: transparent;
`;

const TodoButton = styled.button`
  &:hover {
    background-color: #005ca3;
  }
`;

export default Todo;

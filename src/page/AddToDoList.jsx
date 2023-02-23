import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/addTodo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AddToDoList = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const selectorTodo = useSelector((state) => state.todoList.todo);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const newObj = {
      id: selectorTodo.length + 1,
      name: text,
    };
    dispatch(addTodo(newObj));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
    setIsButtonEnabled(e.target.value.trim() !== "");
  };

  return (
    <Wrapper>
      <Title>ToDo 추가하기</Title>
      <Input
        type="text"
        placeholder="글을 안쓰면 추가하기버튼이 비활성화 됩니다"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AddButton onClick={onClickHandler} disabled={!isButtonEnabled}>
        추가하기
      </AddButton>

      <AddButton onClick={() => navigate(-1)}>뒤로가기</AddButton>
      <TodoList>
        {selectorTodo.map((v) => (
          <Todo key={v.id}>
            <TodoId>{v.id}</TodoId>
            <TodoName>{v.name}</TodoName>
          </Todo>
        ))}
      </TodoList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005ca3;
  }
`;

const TodoList = styled.div`
  margin-top: 20px;
`;

const Todo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const TodoId = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const TodoName = styled.span``;

export default AddToDoList;

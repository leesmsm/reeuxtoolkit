import { useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { addTodo } from "../redux/modules/Todo";
import { addTodo } from "../api/todos";
import { useMutation, useQueryClient } from "react-query";

export const Form = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    // dispatch(addTodo(newObj));
    mutation.mutate(newTodo);
    setTitle("");
    setContent("");
  };
  return (
    <TodoForm onSubmit={onSubmit}>
      <InputContainer>
        <div>
          <span>제목</span>
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span>내용</span>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
      </InputContainer>
      <FormButton>추가하기</FormButton>
    </TodoForm>
  );
};

const TodoForm = styled.form`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: skyblue;
  border-radius: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  span {
    font-weight: 600;
  }
  input {
    border: 0;
    height: 2rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
  }
`;

const FormButton = styled.button`
  width: 8rem;
  height: 2rem;
  border: 0;
  color: white;
  background-color: green;
  border-radius: 0.25rem;
  &:hover {
    background-color: #467400;
  }
`;

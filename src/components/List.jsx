// import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";

export const List = () => {
  // const TodoList = useSelector((state) => state.Todo.todo);
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <h1>로딩중입니다...!</h1>;
  }
  if (isError) {
    return <h1>로딩중입니다...!</h1>;
  }
  console.log(isLoading);
  return (
    <ListSection>
      <ListIsDone>Working..</ListIsDone>
      <ul>
        {data
          .filter((todo) => !todo.isDone)
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                isDone={todo.isDone}
              />
            );
          })}
      </ul>
      <ListIsDone>Done</ListIsDone>
      <ul>
        {data
          .filter((todo) => todo.isDone)
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                isDone={todo.isDone}
              />
            );
          })}
      </ul>
    </ListSection>
  );
};

const ListSection = styled.section`
  padding: 0 1rem;
  margin-top: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const ListIsDone = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

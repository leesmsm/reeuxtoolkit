import styled from "styled-components";

export const Header = () => {
  return (
    <TodoHeader>
      <span>My Todo List</span>
      <span>React</span>
    </TodoHeader>
  );
};

const TodoHeader = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border: 1px solid silver;
`;

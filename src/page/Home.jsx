import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <StyledLink to="/CountNumber">숫자 올리기</StyledLink>
      <StyledLink to="/AddToDoList">ToDo 추가하기</StyledLink>
      <StyledLink to="/TodoList">ToDo list</StyledLink>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  background-color: #0077cc;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  width: 200px;

  &:hover {
    background-color: #005ca3;
  }
`;

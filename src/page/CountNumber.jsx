import { useDispatch, useSelector } from "react-redux";
import { minusCount, __addNumber } from "../redux/modules/counter";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CountNumber = () => {
  const navigate = useNavigate();
  const Num = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    dispatch(__addNumber(1));
  };

  return (
    <Container>
      <StCount>
        <Title>숫자 올리기</Title>
        <Count>{Num}</Count>
        <Button onClick={onClickAddNumberHandler}>+</Button>
        <Button onClick={() => dispatch(minusCount(1))}>-</Button>
        <Button onClick={() => navigate(-1)}>뒤로 가기</Button>
      </StCount>
    </Container>
  );
};

export default CountNumber;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Count = styled.span`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  padding: 10px 20px;
  margin: 10px;

  &:hover {
    background-color: #005ca3;
  }
`;

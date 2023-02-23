import styled from "styled-components";
export const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};
const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

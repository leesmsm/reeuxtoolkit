import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}

main {
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
}

ul {
  padding: 0;
}
`;

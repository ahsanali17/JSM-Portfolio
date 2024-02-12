import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({ theme }) => theme === 'day' ? 'white' : 'black'};
    overflow-x: hidden;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
`;

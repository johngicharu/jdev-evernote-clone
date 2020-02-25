import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyles;

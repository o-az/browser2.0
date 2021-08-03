import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  main {
    text-align: center;
    vertical-align: center;
    line-height: 100vh;
  }

  .App {
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
    max-width: 1200px;
    display: grid;
    justify-items: center;
    //grid-gap: 100px;
  }
`;

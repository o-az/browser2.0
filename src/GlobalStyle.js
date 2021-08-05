import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  html {
    min-height: 100vh;
    min-width: 100%;
  }
  body {
    min-height: 100vh;
    min-width: 100%;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .App {
    margin: 0 auto;
    font-family: sans-serif;
    text-align: center;
    max-width: 85rem;
    display: grid;
    justify-items: center;
    //grid-gap: 100px;
  }
`;

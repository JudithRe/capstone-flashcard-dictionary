import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --light-grey: #CBCBD4;
    --highlight-red: #B82C23;
    --highlight-green: #5F8179;
    --dark-main: #2E2836;
    --text-color: #30343F;
    --white: #ffffff;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: var(--light-grey);
    color: var(--text-color);
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

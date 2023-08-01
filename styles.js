import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {

/* COLORS */

    --light-grey: #CBCBD4;
    --highlight-red: #B82C23;
    --highlight-green: #5F8179;
    --dark-main: #2E2836;
    --text-color: #30343F;
    --white: #ffffff;

/* OTHER */

    --default-box-shadow: 6px 10px 10px -4px #969496;
    --inset-box-shadow: 1px 1px 5px -1px #969496;
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

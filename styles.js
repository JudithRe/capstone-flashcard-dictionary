import { createGlobalStyle } from "styled-components";
import { poppins } from "./fonts";

export default createGlobalStyle`
  :root {

/* COLORS */

    
    --light-grey: #D8D6CC;
    
    --highlight-red: #D04C3C;
    --highlight-green: #5F8179;
    --highlight-blue: #3F7496;
    
    --dark-main: #223257;
    --text-color: #30343F;
    --dark-mode-text-color: #ffffff; 
    --overlay: rgba(216,	214,	204, 0.9);
    --disabled: #CBCBD4;  

/* HEIGHTS and WIDTHS */

    --footer-height: 7rem;
    --card-width: 300px;
    --header-height: 100px;
    --header-height-mobile: 225px;
    --header-height-desktop: 225px; 

/* OTHER */

    --default-box-shadow: 1px 4px 4px -1px rgba(0, 0, 0, 0.25);
    --inset-box-shadow: 1px 1px 3px -4px #969496;
    --border-radius: 25px;
  }
  


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: var(--text-color);
    font-family: ${poppins.style.fontFamily}, sans-serif;
    
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--light-grey);
    background-image: url("/background-vector.png");
    background-repeat: repeat;
    

  }

.navTransition {
  transition: 400ms linear;
}

`;

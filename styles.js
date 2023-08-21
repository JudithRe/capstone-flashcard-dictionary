import { createGlobalStyle } from "styled-components";
import {
  Poppins,
  Short_Stack,
  Waiting_for_the_Sunrise,
  Permanent_Marker,
} from "@next/font/google";
// import { Indie_Flower } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const indie = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
export default createGlobalStyle`
  :root {

/* COLORS */

    /* --light-grey: #CBCBD4; */
    --light-grey: #D8D6CC;
    /* --highlight-red: #B82C23; */
    --highlight-red: #D04C3C;
    --highlight-green: #5F8179;
    --highlight-blue: #3F7496;
    /* --dark-main: #3f374a; */
    --dark-main: #223257;
    --text-color: #30343F;
    --dark-mode-text-color: #ffffff; 
    --overlay: rgba(216,	214,	204, 0.9);
    --disabled: #CBCBD4;  

/* HEIGHTS and WIDTHS */

    --footer-height: 5rem;
    --card-width: 300px;
    --header-height: 100px;
    --header-height-mobile: 175px;
    --header-height-desktop: 225px; 

/* OTHER */
    /* --default-box-shadow-top: 1px -2px 2px -1px  #3f374a; */
    /* --default-box-shadow-top: 0px -4px 4px rgba(0, 0, 0, 0.25) */
    --default-box-shadow: 1px 4px 4px -1px rgba(0, 0, 0, 0.25);
    --inset-box-shadow: 1px 1px 3px -4px #969496;
    --border-radius: 25px;
  }
  


  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: var(--text-color);
    
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: system-ui;
    background-color: var(--light-grey);
    background-image: url("/background-vector.png");
    background-repeat: repeat;
    font-family: ${poppins.style.fontFamily}, Helvetica, sans-serif;
  }
  

  h1, h2, h3 {
    font-family: ${indie.style.fontFamily}, Helvetica, sans-serif;
    letter-spacing: 3px;
  }
  .inherit-background-color {
  background-color: transparent;
}

.transparent-background-color {
  background-color: transparent;
}

.navTransition {
  transition: 400ms linear;
}

`;

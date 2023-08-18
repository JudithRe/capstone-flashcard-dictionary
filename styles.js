import { createGlobalStyle } from "styled-components";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default createGlobalStyle`
  :root {

/* COLORS */

    --light-grey: #CBCBD4;
    --highlight-red: #B82C23;
    --highlight-green: #5F8179;
    --dark-main: #3f374a;
    --text-color: #30343F;
    --dark-mode-text-color: #ffffff; 
    --overlay: rgba(203, 203, 2012, 0.8);

/* HEIGHTS and WIDTHS */

    --footer-height: 5rem;
    --card-width: 340px;
    --header-height: 100px;
    --header-height-mobile: 175px;
    --header-height-desktop: 225px; 

/* OTHER */
    --default-box-shadow-top: 3px -3px 8px -1px  #3f374a;
    --default-box-shadow: 5px 5px 10px -2px #3a3345;
    --inset-box-shadow: 1px 1px 5px -1px #969496;
    --border-radius: 25px;
  }
  

  * {
  /* background-color: var(--light-grey); */
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
    background-image: url("/BackgroundVector.png");
    background-repeat: repeat;
    font-family: ${poppins.style.fontFamily}, Helvetica, sans-serif;
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

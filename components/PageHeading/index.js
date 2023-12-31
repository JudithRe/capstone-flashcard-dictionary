// Styles Imports
import styled from "styled-components";

// Functions and Dependencies Imports
import { device } from "@/utils/globalValues";

function Heading({ children }) {
  return <StyledPageHeadingCenter>{children}</StyledPageHeadingCenter>;
}

const StyledPageHeadingCenter = styled.h1`
  position: absolute;
  max-width: 300px;
  left: 50%;
  top: 2.2rem;
  transform: translate(-50%);
  background-color: transparent;
  color: var(--dark-mode-text-color);
  font-size: 1.4rem;
  padding: 0.3rem 1rem;
  text-align: center;
  z-index: 3;

  @media ${device.tablet} {
    max-width: 350px;
    top: 3rem;
    font-size: 2rem;
  }
`;

export default Heading;

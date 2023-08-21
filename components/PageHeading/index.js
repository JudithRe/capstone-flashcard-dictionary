// import { indie } from "@/styles";
import { device } from "@/utils/globalValues";

import styled from "styled-components";

function Heading({ PageTitle }) {
  return <StyledPageHeadingCenter>{PageTitle}</StyledPageHeadingCenter>;
}

const StyledPageHeadingCenter = styled.h1`
  position: absolute;
  left: 50%;
  top: 0.2rem;
  transform: translate(-50%);
  background-color: transparent;
  color: var(--dark-mode-text-color);
  font-size: 1.7rem;
  letter-spacing: 3px;
  padding: 0.3rem 1rem;
  text-align: center;
  z-index: 3;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

export default Heading;

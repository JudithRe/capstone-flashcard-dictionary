import styled from "styled-components";

function Heading({ PageTitle }) {
  return <StyledPageHeading>{PageTitle}</StyledPageHeading>;
}

const StyledPageHeading = styled.h1`
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translate(-50%);
  background-color: transparent;
  color: var(--white);
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  z-index: 5;
`;

export default Heading;

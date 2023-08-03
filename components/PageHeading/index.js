import styled from "styled-components";

function Heading({ PageTitle }) {
  return <StyledPageHeading>{PageTitle}</StyledPageHeading>;
}

const StyledPageHeading = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
`;

export default Heading;

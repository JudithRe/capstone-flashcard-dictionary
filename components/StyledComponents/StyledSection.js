import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const StyledSectionRightAlign = styled(StyledSection)`
  justify-content: flex-end;
  justify-self: flex-end;
  background-color: inherit;
`;

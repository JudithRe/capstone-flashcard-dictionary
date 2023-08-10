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

export const StyledSectionLeftAlign = styled(StyledSection)`
  justify-content: flex-start;
  justify-self: flex-start;
  background-color: inherit;
`;

export const StyledCenterAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  background-color: inherit;
  gap: 0.5rem;
`;

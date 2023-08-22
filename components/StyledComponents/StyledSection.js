import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const StyledSectionRightAlign = styled(StyledSection)`
  justify-content: flex-end;
  justify-self: flex-end;
  background-color: inherit;
  margin-right: -4rem;
  @media ${device.tablet} {
    margin-right: -5rem;
  }
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
  background-color: transparent;
  gap: 0.5rem;
  z-index: 2;
`;

export const StyledSectionTopBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin: 0;
  position: fixed;
  top: 1rem;
  z-index: 5;
`;

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
  z-index: 1;
`;

export const StyledSectionRightAlign = styled(StyledSection)`
  justify-content: flex-end;
  align-items: flex-end;
  background-color: inherit;
  margin-right: 0;
  padding: none;
  @media ${device.tablet} {
    margin-right: 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: nowrap;
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

export const StyledSectionFixedTopRight = styled.div`
  margin: 0;
  position: absolute;
  right: 0;
  top: 175px;
  z-index: 5;
`;

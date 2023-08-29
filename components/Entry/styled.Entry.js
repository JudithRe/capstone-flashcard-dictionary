// Styles
import styled from "styled-components";

export const StyledSectionRightAlignAbsolute = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
  padding: none;
`;

export const StyledEditComponent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 10px 0;
  z-index: 3;
  margin-left: -15px;
`;

export const PositionRelativeDiv = styled.div`
  display: flex;
`;

export const StyledJPDefinition = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;

export const StyledDefinition = styled.li`
  display: inline-block;
  background-color: inherit;
  list-style-type: none;
  font-size: 1rem;
  &:not(:last-child)::after {
    content: " ⦁ ";
    background-color: inherit;
  }
  &:not(:first-child) {
    padding-left: 0.3rem;
  }
`;
export const StyledUl = styled.ul`
  background-color: inherit;
  padding: 0;
  text-align: center;
  margin: 0;
`;

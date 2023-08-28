// Styles

import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";

export const StyledFlashcard = styled(StyledCard)`
  position: fixed;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  height: auto;
`;

export const StyledAnswerSection = styled.div`
  padding: 0.5 0 0.5rem 0;
  background-color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const StyledAnswerButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 25px;
  width: 80px;
  height: 50px;
  padding: 5px 25px;
  box-shadow: var(--default-box-shadow);
  color: var(--dark-mode-text-color);
`;

export const RightAnswerButton = styled(StyledAnswerButton)`
  background-color: var(--highlight-green);
`;
export const WrongAnswerButton = styled(StyledAnswerButton)`
  background-color: var(--highlight-red);
`;

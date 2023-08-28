import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import {
  StyledSecondaryButtonRight,
  StyledSubmitButton,
} from "../StyledComponents/StyledButtons";
// Styles

export const StyledCenteredCard = styled(StyledCard)`
  position: fixed;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  height: auto;
`;

export const StyledWarningText = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
`;

export const StyledFormTitle = styled.h2`
  font-size: 1.3rem;
  margin: 15px 0;
  align-self: flex-start;
`;

export const StyledFormButtonRight = styled(StyledSecondaryButtonRight)`
  position: absolute;
  margin: 0;
  top: 1rem;
  right: 0;
`;

export const StyledSubmitButtonRight = styled(StyledSubmitButton)`
  margin-right: -1rem;
  border-radius: 25px 0 0 25px;
`;

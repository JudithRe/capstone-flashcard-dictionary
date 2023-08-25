import Link from "next/link";
import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);
  padding: 10px 17px;
  border: none;
  border-radius: 25px 0 0 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-right: 7px;
  transition: all 0.3s;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 25%);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(0, 0, 0, 25%);
    transform: scale(1.03);
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 25%);
    transform: scale(0.98);
  }

  &:disabled {
    background-color: var(--disabled);
    box-shadow: var(--inset-box-shadow);
  }
`;

export const StyledCenteredButton = styled(StyledSubmitButton)`
  align-self: center;
  border-radius: 15px;
`;

export const StyledSecondaryButton = styled(StyledSubmitButton)`
  background-color: var(--dark-main);
  border-radius: 25px;
  align-self: center;
`;

export const StyledSecondaryButtonRight = styled(StyledSubmitButton)`
  background-color: var(--dark-main);
  margin-right: 0;
`;

/* Settings and Signout buttons */

export const StyledSettingsButton = styled.button`
  align-self: flex-end;
  background-color: var(--dark-main);
  color: var(--dark-mode-text-color);
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 400;
  font-size: 0.7;
  line-height: 0.7;

  &:disabled {
    background-color: var(--light-grey);
    box-shadow: var(--inset-box-shadow);
  }
`;

export const StyledBackButton = styled(Link)`
  padding: 10px 17px;
  margin: 0;
  align-items: center;
  background-color: var(--dark-main);
  border-radius: 0 25px 25px 0;
  color: var(--dark-mode-text-color);
  text-decoration: none;
  font-size: 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 25%);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(0, 0, 0, 25%);
    transform: scale(1.03);
  }

  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 25%);
    transform: scale(0.98);
  }

  &::before {
    content: "← ";
    color: var(--dark-mode-text-color);
  }
`;

export const StyledGhostButton = styled.button`
  padding: 5px 8px;
  margin: 0;
  align-items: center;
  color: var(--dark-main);
  border-radius: 25px;
  border: 2px solid var(--dark-main);
  background-color: transparent;
  text-decoration: none;
`;

export const StyledEditButtonDark = styled(StyledSubmitButton)`
  background-color: var(--dark-main);
  border-radius: 25px;
`;

export const StyledEditButtonRed = styled(StyledSubmitButton)`
  border-radius: 25px;
  background-color: var(--highlight-blue);
`;

export const StyledAddButton = styled(StyledSubmitButton)`
  margin-right: 0rem;
`;

export const StyledEndSessionButton = styled(StyledSubmitButton)`
  position: fixed;
  top: 1rem;
  right: -15px;
  background-color: var(--dark-main);
  border-radius: 25px 0 0 25px;
`;

export const StyledStartButton = styled(StyledCenteredButton)`
  padding: 20px;
  border-radius: 5px;
  background-color: var(--highlight-blue);
`;

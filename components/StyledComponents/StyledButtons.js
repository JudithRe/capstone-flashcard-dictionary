import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);
  padding: 12px 17px;
  border: none;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.2rem;

  &:disabled {
    background-color: var(--light-grey);
    box-shadow: var(--inset-box-shadow);
  }
`;

export const StyledCenteredButton = styled(StyledSubmitButton)`
  align-self: center;
`;

export const StyledSecondaryButton = styled(StyledSubmitButton)`
  background-color: var(--dark-main);
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

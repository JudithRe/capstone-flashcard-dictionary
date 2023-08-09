import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--highlight-red);
  color: var(--white);
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 500;
  font-size: 1.2rem;

  &:disabled {
    background-color: var(--light-grey);
    box-shadow: var(--inset-box-shadow);
  }
`;

export const StyledCenteredButton = styled(StyledSubmitButton)`
  margin: auto;
`;

export const StyledSecondaryButton = styled(StyledSubmitButton)`
  background-color: var(--dark-main);
  z-index: 100;
`;

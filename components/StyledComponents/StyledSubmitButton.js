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

  &:disabled {
    background-color: var(--light-grey);
    box-shadow: var(--inset-box-shadow);
  }
`;

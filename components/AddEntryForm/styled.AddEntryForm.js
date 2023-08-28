import styled from "styled-components";
import { StyledCategorySelector } from "../CategorySelector/styled.CategorySelector";

// Styles
export const StyledDropDown = styled(StyledCategorySelector)`
  color: var(--text-color);
  font-size: 1rem;
`;

export const StyledForm = styled.form`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const StyledFormLabel = styled.label`
  background-color: inherit;
  margin-bottom: -5px;
  font-weight: 500;
  margin-left: 10px;
`;

export const StyledFormInput = styled.input`
  background-color: var(--dark-mode-text-color);
  padding: 10px;
  border: 1px solid var(--dark-main);
  border-radius: 15px;
`;

export const StyledFormSubmitButton = styled.button`
  align-self: flex-end;
  font-size: 1.2rem;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);
  padding: 10px 15px;
  margin-right: -1rem;
  border: none;
  border-radius: 25px 0 0 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 500;
`;

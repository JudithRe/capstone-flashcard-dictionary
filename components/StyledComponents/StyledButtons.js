import Link from "next/link";
import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);
  padding: 10px 17px;
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
  /* background-color: var(--dark-main); */
  background: radial-gradient(circle, var(--dark-main) 60%, #322c3b 90%);
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
  padding: 10px;
  margin: 0;
  align-items: center;
  /* background-color: var(--dark-main); */
  background: radial-gradient(circle, var(--dark-main) 60%, #322c3b 90%);
  border-radius: 25px;
  color: var(--dark-mode-text-color);
  text-decoration: none;
  font-size: 1rem;
  box-shadow: var(--default-box-shadow);

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
  font-size: 0.8rem;
  font-weight: 800;
`;

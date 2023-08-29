// Styles

import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const StyledSearchBarForm = styled.form`
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: var(--dark-mode-text-color);
  padding: 10px;
  border: 2px solid var(--light-grey);
  border-radius: 25px;
  z-index: 3;
  box-shadow: var(--default-box-shadow);
  position: sticky;
  top: 5rem;

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const StyledSearchBar = styled.input`
  background-color: inherit;
  padding: 10px;
  border: none;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

export const StyledSearchBarButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 11px;
`;

export const StyledStickyDivLargeMargin = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  position: sticky;
  top: 3.5rem;
  width: 100%;
`;

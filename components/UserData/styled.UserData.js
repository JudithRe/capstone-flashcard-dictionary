// Styles

import styled from "styled-components";

export const SmallerInlineFont = styled.span`
  font-size: 1rem;
`;

export const StyledProfilePicturePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  border: 4px solid var(--dark-main);
`;

export const StyledUserInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledParagraphNoMargins = styled.p`
  margin: 0;
  text-align: ${(props) => (props.$isCentered ? "center" : "left")};
  margin-bottom: ${(props) => (props.$needsMarginBottom ? "0.5rem" : "0")};
`;

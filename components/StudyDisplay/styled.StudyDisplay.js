// Styles

import styled from "styled-components";

export const StyledStudyCounter = styled.div`
  background-color: var(--dark-main);
  padding: 10px;
  border-radius: 10px;
  min-width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--default-box-shadow);
`;

export const StyledReviewCounter = styled(StyledStudyCounter)`
  background-color: ${(props) =>
    props.$hasReviews ? "var(--highlight-red)" : "var(--highlight-blue)"};
`;

export const StyledCounterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--dark-mode-text-color);
`;

export const StyledCounter = styled.p`
  margin: 5px;
  font-size: 1.6rem;
  background-color: transparent;
  color: var(--dark-mode-text-color);
`;

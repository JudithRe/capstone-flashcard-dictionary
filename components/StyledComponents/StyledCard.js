import styled from "styled-components";

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  background-color: var(--dark-mode-text-color);
  width: var(--card-width);
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  position: relative;
  z-index: 2;
`;

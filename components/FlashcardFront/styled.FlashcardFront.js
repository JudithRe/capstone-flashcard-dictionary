import styled from "styled-components";

export const StyledFlashcardFrontButton = styled.button`
  width: var(--card-width);
  background: radial-gradient(circle, #ffffff 50%, #efefef 100%);
  padding: 1rem;
  position: fixed;
  border-radius: 5px;
  box-shadow: var(--default-box-shadow);
  border: none;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  min-height: 200px;
  font-size: 2rem;
`;

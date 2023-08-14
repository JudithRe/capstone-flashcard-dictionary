import { styled } from "styled-components";
import { StyledJPDefinition } from "../Entry";

function FlashcardFront({ entry, setIsFront }) {
  const { japanese } = entry;

  return (
    <StyledFlashcardFrontButton onClick={() => setIsFront(false)}>
      <StyledJPDefinition>{japanese.word}</StyledJPDefinition>
    </StyledFlashcardFrontButton>
  );
}

export const StyledFlashcardFrontButton = styled.button`
  width: var(--card-width);
  background-color: var(--dark-mode-text-color);
  padding: 1rem;
  position: fixed;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  border: none;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
`;

export default FlashcardFront;

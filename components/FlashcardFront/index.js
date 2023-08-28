import { StyledFlashcardFrontButton } from "./styled.FlashcardFront";

function FlashcardFront({ entry, setIsFront }) {
  const { japanese } = entry;

  return (
    <StyledFlashcardFrontButton onClick={() => setIsFront(false)}>
      <p>{japanese.word}</p>
    </StyledFlashcardFrontButton>
  );
}

export default FlashcardFront;

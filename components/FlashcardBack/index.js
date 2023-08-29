// Styles Imports
import {
  RightAnswerButton,
  StyledAnswerSection,
  StyledFlashcard,
  WrongAnswerButton,
} from "./styled.FlashcardBack";
import {
  StyledDefinition,
  StyledJPDefinition,
  StyledUl,
} from "../Entry/styled.Entry";
import WrongIcon from "@/assets/icons/WrongIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";

// Functions and Dependencies Imports
import { handleRightAnswer, handleWrongAnswer } from "@/utils/studyFunctions";

function FlashcardBack({ entry, studyList, setIsFront, databaseMutate }) {
  const { japanese, english } = entry;

  return (
    <StyledFlashcard>
      <StyledJPDefinition>{japanese.word}</StyledJPDefinition>
      <StyledUl>
        <StyledDefinition>{japanese.reading}</StyledDefinition>
      </StyledUl>
      <StyledUl>
        {english.map((definition) => (
          <StyledDefinition key={definition}>{definition}</StyledDefinition>
        ))}
      </StyledUl>
      <StyledAnswerSection>
        <WrongAnswerButton
          onClick={() =>
            handleWrongAnswer({ studyList, setIsFront, entry, databaseMutate })
          }
        >
          <span role="img" aria-label="I do not know the answer">
            <WrongIcon width="20px" height="20px" />
          </span>
        </WrongAnswerButton>
        <RightAnswerButton
          onClick={() =>
            handleRightAnswer({ studyList, setIsFront, entry, databaseMutate })
          }
        >
          <span role="img" aria-label="I know know the answer">
            <CorrectIcon width="20px" height="20px" />
          </span>
        </RightAnswerButton>
      </StyledAnswerSection>
    </StyledFlashcard>
  );
}

export default FlashcardBack;

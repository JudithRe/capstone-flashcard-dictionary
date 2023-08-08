import { styled } from "styled-components";
import { StyledDefinition, StyledJPDefinition, StyledUl } from "../Entry";
import { StyledCard } from "../StyledComponents/StyledCard";

function FlashcardBack({ entry, studyList, setIsFront }) {
  const { japanese, english } = entry;

  function handleRightAnswer() {
    studyList.shift();
    setIsFront(true);
    // Logic will be added in next user story
  }

  function handleWrongAnswer() {
    studyList.shift();
    setIsFront(true);
    // Logic will be added in next user story
  }

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
        <WrongAnswerButton onClick={() => handleWrongAnswer()}>
          X
        </WrongAnswerButton>
        <RightAnswerButton onClick={() => handleRightAnswer()}>
          ✔
        </RightAnswerButton>
      </StyledAnswerSection>
    </StyledFlashcard>
  );
}

export const StyledFlashcard = styled(StyledCard)`
  position: fixed;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
`;

const StyledAnswerSection = styled.div`
  padding: 0.5 0 0.5rem 0;
  background-color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledAnswerButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 25px;
  width: 80px;
  height: 50px;
  padding: 5px 25px;
  box-shadow: var(--default-box-shadow);
  color: var(--white);
`;

const RightAnswerButton = styled(StyledAnswerButton)`
  background-color: var(--highlight-green);
`;
const WrongAnswerButton = styled(StyledAnswerButton)`
  background-color: var(--highlight-red);
`;

export default FlashcardBack;

import WrongIcon from "@/assets/icons/WrongIcon";
import FlashcardBack from "@/components/FlashcardBack";
import FlashcardFront from "@/components/FlashcardFront";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import {
  StyledCenteredButton,
  StyledSubmitButton,
} from "@/components/StyledComponents/StyledButtons";
import { generateStudyMode } from "@/utils/studyFunctions";
import { useState } from "react";
import { styled } from "styled-components";

export default function StudyPage({ wordList, databaseMutate }) {
  const [studyList, setStudyList] = useState([]);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      {!isStudyMode && (
        <MainContent>
          <Heading PageTitle="Study" />
          <StyledCenteredButton
            onClick={() =>
              generateStudyMode({
                wordList,
                setStudyList,
                setIsStudyMode,
              })
            }
          >
            START
          </StyledCenteredButton>
        </MainContent>
      )}
      {isStudyMode && (
        <StudyModal>
          <StyledEndSessionButton
            type="button"
            onClick={() => setIsStudyMode(false)}
          >
            <span
              className="inherit-background-color"
              role="img"
              aria-label="exit"
            >
              <WrongIcon height="16px" width="16px" />
            </span>{" "}
            End Session
          </StyledEndSessionButton>
          {isFront && studyList.length === 0 && (
            <StyledStudyDisplay>
              <p>No reviews</p>
            </StyledStudyDisplay>
          )}
          {isFront && studyList.length > 0 && (
            <FlashcardFront setIsFront={setIsFront} entry={studyList[0]} />
          )}
          {!isFront && (
            <FlashcardBack
              setIsFront={setIsFront}
              studyList={studyList}
              entry={studyList[0]}
              databaseMutate={databaseMutate}
            />
          )}
        </StudyModal>
      )}
    </>
  );
}

const StyledStudyDisplay = styled.div`
  position: fixed;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
`;

const StyledEndSessionButton = styled(StyledSubmitButton)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: var(--dark-main);

  &::before {
    background-color: inherit;
    color: var(--white);
  }
`;

const StudyModal = styled.section`
  position: fixed;
  background-color: var(--light-grey);
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;

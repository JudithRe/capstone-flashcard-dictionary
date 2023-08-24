import WrongIcon from "@/assets/icons/WrongIcon";
import FlashcardBack from "@/components/FlashcardBack";
import FlashcardFront from "@/components/FlashcardFront";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import {
  StyledEndSessionButton,
  StyledStartButton,
} from "@/components/StyledComponents/StyledButtons";
import { isDue } from "@/utils/studyFunctions";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { hasToken } from "@/utils/checkUser";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import { StyledParagraphNoMargins } from "@/components/UserData";

export async function getServerSideProps(context) {
  const token = await hasToken(context.req);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function StudyPage({ wordList, databaseMutate }) {
  const [studyList, setStudyList] = useState([]);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [isFront, setIsFront] = useState(true);

  useEffect(() => {
    function generateStudyMode() {
      if (wordList) {
        const entriesDue = wordList.filter((entry) => {
          return isDue(entry.study.lastReview, entry.study.stage);
        });

        setStudyList(entriesDue);

        return entriesDue;
      }
    }
    generateStudyMode();
  }, [wordList]);

  return (
    <>
      {!isStudyMode && studyList.length > 0 && (
        <MainContent>
          <Heading>Study</Heading>
          <FixedCenteredPosition>
            <p style={{ textAlign: "center" }}>
              {`${studyList.length} ${
                studyList.length > 1 ? "entries" : "entry"
              } due.`}
            </p>
            <StyledStartButton onClick={() => setIsStudyMode(true)}>
              Start
            </StyledStartButton>
          </FixedCenteredPosition>
        </MainContent>
      )}
      {!isStudyMode && studyList.length === 0 && (
        <MainContent>
          <Heading>Study</Heading>
          <FixedCenteredPosition>
            <CorrectIcon color="var(--dark-main)" /> <br />
            <StyledParagraphNoMargins style={{ textAlign: "center" }}>
              No reviews available. <br />
              Well done!
            </StyledParagraphNoMargins>
          </FixedCenteredPosition>
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
            </span>
            {`  End Session`}
          </StyledEndSessionButton>

          {isFront && studyList.length === 0 && (
            <FixedCenteredPosition>
              <CorrectIcon color="var(--dark-main)" /> <br />
              <StyledParagraphNoMargins style={{ textAlign: "center" }}>
                All done for now. <br />
                Check back again later!
              </StyledParagraphNoMargins>
            </FixedCenteredPosition>
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

export const StudyModal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  background-image: url("/background-vector.png");
  background-repeat: repeat;

  width: 100vw;
  height: 100vh;
  z-index: 6;
`;

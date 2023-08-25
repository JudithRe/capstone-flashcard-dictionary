// Style Imports
import WrongIcon from "@/assets/icons/WrongIcon";
import {
  FixedCenteredPosition,
  StudyModal,
} from "@/components/StyledComponents/Modal";
import {
  StyledEndSessionButton,
  StyledStartButton,
} from "@/components/StyledComponents/StyledButtons";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import { StyledParagraphNoMargins } from "@/components/UserData";

// Component Imports
import FlashcardBack from "@/components/FlashcardBack";
import FlashcardFront from "@/components/FlashcardFront";
import Heading from "@/components/PageHeading";

// Function and Dependency Imports
import { generateStudyMode } from "@/utils/studyFunctions";
import { useEffect, useState } from "react";
import { hasToken } from "@/utils/checkUser";

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
    generateStudyMode(wordList, setStudyList);
  }, [wordList]);

  return (
    <>
      {!isStudyMode && studyList.length > 0 && (
        <>
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
        </>
      )}
      {!isStudyMode && studyList.length === 0 && (
        <>
          <Heading>Study</Heading>
          <FixedCenteredPosition>
            <CorrectIcon color="var(--dark-main)" /> <br />
            <StyledParagraphNoMargins $isCentered={true}>
              No reviews available. <br />
              Well done!
            </StyledParagraphNoMargins>
          </FixedCenteredPosition>
        </>
      )}
      {isStudyMode && (
        <StudyModal>
          <StyledEndSessionButton
            type="button"
            onClick={() => setIsStudyMode(false)}
          >
            <span role="img" aria-label="exit">
              <WrongIcon height="16px" width="16px" />
            </span>
            {`  End Session`}
          </StyledEndSessionButton>

          {isFront && studyList.length === 0 && (
            <FixedCenteredPosition>
              <CorrectIcon color="var(--dark-main)" /> <br />
              <StyledParagraphNoMargins $isCentered={true}>
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

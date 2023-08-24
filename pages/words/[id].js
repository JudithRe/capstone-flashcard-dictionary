import EditIcon from "@/assets/icons/EditIcon";
import EditingForm from "@/components/EditingForm";
import { StyledResultDisplay } from "@/components/SearchResults";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import {
  StyledBackButton,
  StyledSecondaryButtonRight,
} from "@/components/StyledComponents/StyledButtons";
import { StyledCardLeftAlign } from "@/components/StyledComponents/StyledCard";
import {
  StyledSectionFixedTopCenter,
  StyledSectionTopBetween,
} from "@/components/StyledComponents/StyledSection";
import { getVisualDate } from "@/utils/helperFunctions";
import { useRouter } from "next/router";
import styled from "styled-components";
import { hasToken } from "@/utils/checkUser";
import Heading from "@/components/PageHeading";
import { device } from "@/utils/globalValues";
import SingleBarDiagram from "@/components/SingleBarDiagram";

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

export default function WordDetail({
  wordList,
  databaseIsLoading,
  databaseMutate,
  isDetailEditMode,
  handleDetailEditMode,
  handleAddCategory,
  activeUser,
  categoryData,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (databaseIsLoading || !wordList) {
    return (
      <MainContent>
        <FixedCenteredPosition>
          <StyledResultDisplay>Loading...</StyledResultDisplay>
        </FixedCenteredPosition>
      </MainContent>
    );
  }

  const entryData = wordList.find(({ _id }) => _id === id);

  if (!entryData) {
    return (
      <MainContent>
        <FixedCenteredPosition>
          <StyledResultDisplay>No entry found.</StyledResultDisplay>
        </FixedCenteredPosition>
      </MainContent>
    );
  }

  if (entryData) {
    const {
      english,
      japanese,
      isCommon,
      jlpt,
      wanikani,
      study,
      categoryName,
      category,
    } = entryData;

    const { lastReview, stage, wrongAnswerCount, rightAnswerCount, streak } =
      study;

    const visualReviewDate = getVisualDate(lastReview);

    const AnswerOverview = [
      { id: "1", name: "wrong", value: wrongAnswerCount },
      { id: "2", name: "right", value: rightAnswerCount },
    ];

    return (
      <MainContent>
        <StyledSectionFixedTopCenter>
          <PermanentCircle />
        </StyledSectionFixedTopCenter>
        {isDetailEditMode && (
          <EditingForm
            handleDetailEditMode={handleDetailEditMode}
            previousEnglish={english}
            previousJapanese={japanese.word}
            previousReading={japanese.reading}
            entry={entryData}
            _id={id}
            databaseMutate={databaseMutate}
            handleAddCategory={handleAddCategory}
            activeUser={activeUser}
            categoryData={categoryData}
            previousCategory={category}
            previousCategoryName={categoryName}
          />
        )}
        <StyledSectionFixedCenter>
          <Heading>{japanese.word}</Heading>
        </StyledSectionFixedCenter>
        <StyledSectionTopBetween>
          <StyledBackButton href="/words"></StyledBackButton>
          <StyledSecondaryButtonRight
            type="button"
            onClick={() => handleDetailEditMode(true)}
          >
            <span
              className="inherit-background-color"
              role="img"
              aria-label="edit"
            >
              <EditIcon height="20px" width="20px" />
            </span>
          </StyledSecondaryButtonRight>
        </StyledSectionTopBetween>

        <StyledTagContainer>
          <StyledTag>Stage: {stage}</StyledTag>
          <StyledTag>Streak: {streak}</StyledTag>
        </StyledTagContainer>

        <StyledCardLeftAlign>
          <StyledHeading3>Reading</StyledHeading3>
          <StyledCardParagraph>{japanese.reading}</StyledCardParagraph>

          <StyledHeading3>Definition</StyledHeading3>
          <StyledList>
            {english.map((definition) => (
              <li key={definition}>{definition}</li>
            ))}
          </StyledList>
        </StyledCardLeftAlign>

        <StyledCardLeftAlign>
          <StyledHeading2>Further Information</StyledHeading2>
          <StyledList>
            <li>{isCommon ? "Common Word" : "Not Common"}</li>
          </StyledList>
          <StyledHeading3>Category</StyledHeading3>
          <StyledList>
            <li>{categoryName ? categoryName : "No category"}</li>
          </StyledList>
          {(jlpt || wanikani) && <StyledHeading3>Difficulty</StyledHeading3>}
          <StyledList>
            {jlpt && <li>{jlpt}</li>}
            {wanikani && <li>{wanikani}</li>}
          </StyledList>
        </StyledCardLeftAlign>

        <StyledCardLeftAlign>
          <StyledHeading2>Study Progress</StyledHeading2>

          <StyledHeading3>Last Review</StyledHeading3>
          <StyledList>
            <li>{visualReviewDate}</li>
          </StyledList>

          <StyledHeading3>Answer Count</StyledHeading3>
          <SingleBarDiagram
            inputArray={AnswerOverview}
            unit="times"
            height="250"
          />
        </StyledCardLeftAlign>
      </MainContent>
    );
  }
}

const PermanentCircle = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);

  @media ${device.tablet} {
    width: 400px;
    height: 200px;
  }
`;

export const StyledHeading2 = styled.h2`
  padding: 1.5rem 0 0.3rem 0;
  color: var(--dark-main);
  font-size: 1.2rem;
  margin: 0px;
`;

const StyledCardParagraph = styled.p`
  margin-top: 0;
`;
export const StyledHeading3 = styled.h3`
  display: inline-block;
  padding: 1.5rem 0 0.3rem 0;
  color: var(--dark-main);
  font-size: 1.2rem;
  margin: 0px;
`;

export const StyledTag = styled.span`
  padding: 5px 15px;
  border-radius: 25px;
  background-color: var(--dark-main);
  color: var(--dark-mode-text-color);
`;

const StyledList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 1.3rem;
`;

const StyledTagContainer = styled.span`
  display: flex;
  gap: 0.8rem;
  padding-bottom: 1rem;
`;

const StyledSectionFixedCenter = styled.div`
  position: fixed;
  width: 300px;
  top: 0;
  right: 50%;
  transform: translate(50%);
  z-index: 5;
  @media ${device.tablet} {
    width: 400px;
  }
`;

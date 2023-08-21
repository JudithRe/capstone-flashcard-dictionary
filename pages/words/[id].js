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
import { StyledSectionTopBetween } from "@/components/StyledComponents/StyledSection";
import { getVisualDate } from "@/utils/helperFunctions";
import { useRouter } from "next/router";
import styled from "styled-components";
import { hasToken } from "@/utils/checkUser";
import Heading from "@/components/PageHeading";

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
      <FixedCenteredPosition>
        <StyledResultDisplay>Loading...</StyledResultDisplay>
      </FixedCenteredPosition>
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
    return (
      <MainContent>
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
        <Heading PageTitle={japanese.word} />

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
          <StyledTag>Stage {stage}</StyledTag>
          <StyledTag>{streak}-day streak</StyledTag>
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
          <StyledTag>{isCommon ? "Common Word" : "Not Common"}</StyledTag>
          <StyledHeading3>Category</StyledHeading3>
          <StyledTag>{categoryName ? categoryName : "No category"}</StyledTag>
          {(jlpt || wanikani) && <StyledHeading3>Difficulty</StyledHeading3>}
          <StyledTagContainer>
            {jlpt && <StyledTag>{jlpt}</StyledTag>}
            {wanikani && <StyledTag>{wanikani}</StyledTag>}
          </StyledTagContainer>
        </StyledCardLeftAlign>

        <StyledCardLeftAlign>
          <StyledHeading2>Study Progress</StyledHeading2>

          <StyledHeading3>Last Review</StyledHeading3>
          <p className="inherit-background-color">{visualReviewDate}</p>
          <StyledHeading3>Answer Count</StyledHeading3>
          <StyledTagContainer>
            <StyledTagRed>{`wrong: ${wrongAnswerCount}`}</StyledTagRed>
            <StyledTagGreen>{`right: ${rightAnswerCount}`}</StyledTagGreen>
          </StyledTagContainer>
        </StyledCardLeftAlign>
      </MainContent>
    );
  }
}

const StyledHeading2 = styled.h2`
  padding: 1rem 0 0.3rem 0;
  color: var(--dark-main);
  background-color: inherit;
  font-size: 1.3rem;
  letter-spacing: 3px;
  margin: 0px;
`;

const StyledCardParagraph = styled.p`
  margin-top: 0;
`;
const StyledHeading3 = styled.h3`
  padding: 1.5rem 0 0.3rem 0;
  color: var(--dark-main);
  background-color: inherit;
  font-size: 1.2rem;
  letter-spacing: 3px;
  margin: 0px;
`;

export const StyledTag = styled.span`
  padding: 5px 15px;
  border-radius: 25px;
  background-color: var(--dark-main);
  color: var(--dark-mode-text-color);
`;

const StyledTagRed = styled(StyledTag)`
  background-color: var(--highlight-red);
`;

const StyledTagGreen = styled(StyledTag)`
  background-color: var(--highlight-green);
`;

const StyledList = styled.ul`
  margin-top: 0;
  padding-left: 1.3rem;
`;

const StyledTagContainer = styled.span`
  display: flex;
  gap: 0.8rem;
  padding-bottom: 1rem;
`;

import EditIcon from "@/assets/icons/EditIcon";
import EditingForm from "@/components/EditingForm";
import { StyledDefinition, StyledUl } from "@/components/Entry";
import { StyledResultDisplay } from "@/components/SearchResults";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import {
  StyledBackButton,
  StyledSecondaryButton,
} from "@/components/StyledComponents/StyledButtons";
import { StyledCard } from "@/components/StyledComponents/StyledCard";
import {
  StyledCenterAlign,
  StyledSectionTopBetween,
} from "@/components/StyledComponents/StyledSection";
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
          <StyledBackButton href="/words">Back</StyledBackButton>
          <StyledSecondaryButton
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
          </StyledSecondaryButton>
        </StyledSectionTopBetween>

        <StyledCard>
          <StyledUl>
            <StyledDefinition>Reading: {japanese.reading}</StyledDefinition>
          </StyledUl>
          <StyledUl>
            Definition:
            {english.map((definition) => (
              <StyledDefinition key={definition}>{definition}</StyledDefinition>
            ))}
          </StyledUl>
        </StyledCard>

        <StyledCard>
          <StyledHeading2>Further Information</StyledHeading2>
          <StyledTag>{isCommon ? "Common Word" : "Not Common"}</StyledTag>
          <StyledHeading3>Category</StyledHeading3>
          <StyledTag>{categoryName ? categoryName : "No category"}</StyledTag>
          {(jlpt || wanikani) && <StyledHeading3>Difficulty</StyledHeading3>}
          <StyledCenterAlign>
            {jlpt && <StyledTag>{jlpt}</StyledTag>}
            {wanikani && <StyledTag>{wanikani}</StyledTag>}
          </StyledCenterAlign>
        </StyledCard>

        <StyledCard>
          <StyledHeading2>Study Progress</StyledHeading2>
          <StyledCenterAlign>
            <StyledTag>Stage {stage}</StyledTag>
            <StyledTag>Streak {streak}</StyledTag>
          </StyledCenterAlign>
          <p className="inherit-background-color">{`last review: ${visualReviewDate}`}</p>
          <p className="inherit-background-color">{`wrong: ${wrongAnswerCount} / right: ${rightAnswerCount}`}</p>
        </StyledCard>
      </MainContent>
    );
  }
}

const StyledHeading2 = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;
const StyledHeading3 = styled.h3`
  background-color: inherit;
  font-size: 1.3rem;
  margin: 0px;
`;

export const StyledTag = styled.p`
  padding: 15px;
  border-radius: 25px;
  background-color: var(--light-grey);
`;

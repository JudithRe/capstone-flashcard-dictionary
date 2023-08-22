import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSectionRightAlign } from "@/components/StyledComponents/StyledSection";
import {
  StyledSecondaryButton,
  StyledSecondaryButtonSticky,
} from "@/components/StyledComponents/StyledButtons";
import { useState } from "react";
import EditIcon from "@/assets/icons/EditIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import { hasToken } from "@/utils/checkUser";
import CategorySelector from "@/components/CategorySelector";
import { styled } from "styled-components";

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

export default function WordList({
  wordList,
  databaseIsLoading,
  databaseMutate,
  handleDetailEditMode,
  categoryData,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const [filteredWordList, setFilteredWordList] = useState(wordList);

  function handleFilterWordList(filteredList) {
    setFilteredWordList(filteredList);
  }

  return (
    <>
      {wordList && <Heading PageTitle={`${wordList.length} Saved Words`} />}

      <MainContent>
        <StyledStickyDiv>
          <StyledSectionRightAlign>
            <CategorySelector
              categoryData={categoryData}
              wordList={wordList}
              handleFilterWordList={handleFilterWordList}
            />
            <StyledSecondaryButton
              type="button"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {!isEditMode ? (
                <span
                  className="inherit-background-color"
                  role="img"
                  aria-label="edit"
                >
                  <EditIcon height="20px" width="20px" />
                </span>
              ) : (
                <span
                  className="inherit-background-color"
                  role="img"
                  aria-label="done editing"
                >
                  <CorrectIcon height="16px" width="16px" />
                </span>
              )}
            </StyledSecondaryButton>
          </StyledSectionRightAlign>
        </StyledStickyDiv>
        <EntriesContainer
          isEditMode={isEditMode}
          handleDetailEditMode={handleDetailEditMode}
          wordList={filteredWordList}
          databaseIsLoading={databaseIsLoading}
          databaseMutate={databaseMutate}
        />
      </MainContent>
    </>
  );
}

const StyledStickyDiv = styled.div`
  z-index: 10;
  position: sticky;
  top: 1rem;
`;

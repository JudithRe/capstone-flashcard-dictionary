// Style Imports
import {
  StyledSectionRightAlign,
  StyledStickyDiv,
} from "@/components/StyledComponents/StyledSection";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import EditIcon from "@/assets/icons/EditIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";

// Component Imports
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import CategorySelector from "@/components/CategorySelector";

//Function and Dependency Imports
import { useState } from "react";
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
      {filteredWordList && (
        <Heading>
          {filteredWordList.length}{" "}
          {filteredWordList.length === 1 ? "Word" : "Words"}
        </Heading>
      )}

      <>
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
                <span role="img" aria-label="edit">
                  <EditIcon height="20px" width="20px" />
                </span>
              ) : (
                <span role="img" aria-label="done editing">
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
      </>
    </>
  );
}

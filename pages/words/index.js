import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSectionRightAlign } from "@/components/StyledComponents/StyledSection";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import { useEffect, useState } from "react";
import EditIcon from "@/assets/icons/EditIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";

export default function WordList({
  wordList,
  databaseIsLoading,
  databaseMutate,
  setIsDetailEditMode,
  setActivePage,
}) {
  useEffect(() => {
    setActivePage("word-list");
  }, [setActivePage]);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <MainContent>
      {wordList && <Heading PageTitle={`${wordList.length} Saved Words`} />}
      <StyledSectionRightAlign>
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
      <EntriesContainer
        isEditMode={isEditMode}
        setIsDetailEditMode={setIsDetailEditMode}
        wordList={wordList}
        databaseIsLoading={databaseIsLoading}
        databaseMutate={databaseMutate}
      />
    </MainContent>
  );
}

import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSectionRightAlign } from "@/components/StyledComponents/StyledSection";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import { useState } from "react";

export default function WordList({
  wordList,
  databaseIsLoading,
  databaseMutate,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <MainContent>
      {wordList && <Heading PageTitle={`${wordList.length} Saved Words`} />}
      <StyledSectionRightAlign>
        <StyledSecondaryButton
          type="button"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {!isEditMode ? "✎" : "✔"}
        </StyledSecondaryButton>
      </StyledSectionRightAlign>
      <EntriesContainer
        isEditMode={isEditMode}
        wordList={wordList}
        databaseIsLoading={databaseIsLoading}
        databaseMutate={databaseMutate}
      />
    </MainContent>
  );
}

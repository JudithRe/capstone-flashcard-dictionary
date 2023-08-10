import Entry from "../Entry";
import { StyledResultDisplay } from "../SearchResults";

import { StyledSection } from "../StyledComponents/StyledSection";

function EntriesContainer({
  wordList,
  handleAddEntry,
  databaseIsLoading,
  isEditMode,
  databaseMutate,
  isDetailEditMode,
  setIsDetailEditMode,
}) {
  if (databaseIsLoading) {
    return (
      <StyledResultDisplay>Loading word list entries...</StyledResultDisplay>
    );
  }

  if (wordList) {
    return (
      <StyledSection>
        {wordList.map((entry) => {
          if (entry._id) {
            return (
              <Entry
                isEditMode={isEditMode}
                isDetailEditMode={isDetailEditMode}
                setIsDetailEditMode={setIsDetailEditMode}
                key={entry._id}
                entry={entry}
                handleAddEntry={handleAddEntry}
                databaseMutate={databaseMutate}
              />
            );
          }
          return (
            <Entry
              key={entry.slug}
              entry={entry}
              handleAddEntry={handleAddEntry}
            />
          );
        })}
      </StyledSection>
    );
  }
}

export default EntriesContainer;

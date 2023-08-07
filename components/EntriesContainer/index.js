import Entry from "../Entry";
import { StyledResultDisplay } from "../SearchResults";

import { StyledSection } from "../StyledComponents/StyledSection";

function EntriesContainer({ wordList, handleAddEntry, databaseIsLoading }) {
  if (databaseIsLoading) {
    return (
      <StyledResultDisplay>Loading word list entries...</StyledResultDisplay>
    );
  }

  if (wordList) {
    return (
      <StyledSection>
        {wordList.map((entry) => {
          return (
            <Entry
              key={entry._id}
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

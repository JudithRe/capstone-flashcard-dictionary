import Entry from "../Entry";

import { StyledSection } from "../StyledComponents/StyledSection";

function EntriesContainer({ wordList, handleAddEntry }) {
  return (
    <StyledSection>
      {wordList.map((entry) => {
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

export default EntriesContainer;

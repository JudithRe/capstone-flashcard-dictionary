import Entry from "../Entry";

import { StyledSection } from "../StyledComponents/StyledSection";

function EntriesContainer({ wordList }) {
  return (
    <StyledSection>
      {wordList.map((entry) => {
        return (
          <Entry
            key={entry.slug}
            JPDefinition={entry.japanese.word}
            JPReading={entry.japanese.reading}
            ENDefinition={entry.english}
          />
        );
      })}
    </StyledSection>
  );
}

export default EntriesContainer;

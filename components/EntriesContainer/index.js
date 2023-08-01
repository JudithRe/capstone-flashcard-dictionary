import Entry from "../Entry";

import { StyledSection } from "../StyledComponents/StyledSection";

function EntriesContainer({ wordList }) {
  return (
    <StyledSection>
      {wordList.map((entry) => {
        return (
          <Entry
            key={entry.slug}
            JPDefinition={entry.japanese[0].word}
            JPReading={entry.japanese[0].reading}
            ENDefinition={entry.senses[0].english_definitions}
          />
        );
      })}
    </StyledSection>
  );
}

export default EntriesContainer;

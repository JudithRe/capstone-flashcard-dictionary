import { styled } from "styled-components";
import Entry from "../Entry";
import { dummyData } from "@/pages/api/dummyData";

function EntriesContainer() {
  return (
    <StyledEntrySection>
      {dummyData.map((entry) => {
        return (
          <Entry
            key={entry.slug}
            JPDefinition={entry.japanese[0].word}
            JPReading={entry.japanese[0].reading}
            ENDefinition={entry.senses[0].english_definitions}
          />
        );
      })}
    </StyledEntrySection>
  );
}

const StyledEntrySection = styled.section`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default EntriesContainer;

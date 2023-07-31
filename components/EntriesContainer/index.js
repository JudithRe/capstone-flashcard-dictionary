import { styled } from "styled-components";
import Entry from "../Entry";

function EntriesContainer() {
  return (
    <StyledEntrySection>
      <Entry JPDefinition="猫" JPReading="ねこ" ENDefinition="cat" />
      <Entry
        JPDefinition="晩ご飯"
        JPReading="ばんごはん"
        ENDefinition="dinner"
      />
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

import { styled } from "styled-components";
import EntriesContainer from "../EntriesContainer";

function SearchResults({ searchResults, searchTerm }) {
  return (
    <>
      <StyledResultDisplay>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${searchTerm}"`
          : `No results for "${searchTerm}"`}
      </StyledResultDisplay>
      <EntriesContainer wordList={searchResults} />
    </>
  );
}

const StyledResultDisplay = styled.p`
  align-self: center;
`;

export default SearchResults;

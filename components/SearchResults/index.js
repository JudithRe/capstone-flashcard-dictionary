import styled from "styled-components";
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";

function SearchResults({
  searchResults,
  searchTerm,
  dictionaryResults,
  isLoading,
}) {
  if (searchTerm.length === 0) {
    return;
  }

  return (
    <>
      <StyledResultDisplay>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${searchTerm}" in your word list.`
          : `No results for "${searchTerm}" in your word list.`}
      </StyledResultDisplay>
      <EntriesContainer wordList={searchResults} />

      <DictionaryResults
        searchTerm={searchTerm}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
        searchResults={searchResults}
      />
    </>
  );
}

export const StyledResultDisplay = styled.p`
  align-self: center;
`;

export default SearchResults;

import styled from "styled-components";
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";

function SearchResults({
  searchResults,
  query,
  dictionaryQuery,
  dictionaryResults,
  isLoading,
}) {
  if (query.length === 0) {
    return;
  }

  return (
    <>
      <StyledResultDisplay>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${query}" in your word list.`
          : `No results for "${query}" in your word list.`}
      </StyledResultDisplay>
      {searchResults.length > 0 ? (
        <EntriesContainer wordList={searchResults} />
      ) : (
        ""
      )}
      <DictionaryResults
        query={query}
        dictionaryQuery={dictionaryQuery}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
      />
    </>
  );
}

export const StyledResultDisplay = styled.p`
  align-self: center;
`;

export default SearchResults;

import styled from "styled-components";
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";

function SearchResults({
  searchResults,
  query,
  dictionaryQuery,
  setDictionaryQuery,
  dictionaryResults,
  isLoading,
  hasEntries,
  setHasEntries,
}) {
  if (query.length === 0) {
    return;
  }

  function handleSearchDictionaryButtonSubmit() {
    setDictionaryQuery(query);
    setHasEntries(false);
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
      {hasEntries ? (
        <StyledSearchButton
          type="button"
          onClick={() => handleSearchDictionaryButtonSubmit()}
        >
          Search Dictionary
        </StyledSearchButton>
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

const StyledSearchButton = styled.button`
  background-color: var(--highlight-red);
  color: var(--white);
  border-radius: 25px;
  border: none;
  box-shadow: var(--default-box-shadow);
  padding: 10px;
  margin: auto;
`;

export default SearchResults;

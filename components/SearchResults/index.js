import styled from "styled-components";
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";
import { StyledCenteredButton } from "../StyledComponents/StyledButtons";

function SearchResults({
  searchResults,
  query,
  dictionaryQuery,
  handleSetDictionaryQuery,
  dictionaryResults,
  dictionaryIsLoading,
  hasEntries,
  handleHasEntries,
  handleAddEntry,
}) {
  if (query.length === 0) {
    return;
  }

  function handleSearchDictionaryButtonSubmit() {
    handleSetDictionaryQuery(query);
    handleHasEntries(false);
  }

  return (
    <>
      <StyledResultDisplay>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${query}" in your word list.`
          : `No results for "${query}" in your word list.`}
      </StyledResultDisplay>
      {searchResults.length > 0 && (
        <EntriesContainer
          wordList={searchResults}
          handleAddEntry={handleAddEntry}
        />
      )}
      {hasEntries && (
        <StyledCenteredButton
          type="button"
          onClick={() => handleSearchDictionaryButtonSubmit()}
        >
          Search Dictionary
        </StyledCenteredButton>
      )}
      <DictionaryResults
        query={query}
        dictionaryQuery={dictionaryQuery}
        dictionaryResults={dictionaryResults}
        dictionaryIsLoading={dictionaryIsLoading}
        handleAddEntry={handleAddEntry}
      />
    </>
  );
}

export const StyledResultDisplay = styled.p`
  align-self: center;
`;

export default SearchResults;

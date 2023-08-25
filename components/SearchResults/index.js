// Styles Imports
import styled from "styled-components";
import { StyledCenteredButton } from "../StyledComponents/StyledButtons";

// Components Imports
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";

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
      <StyledResultDisplayNoMargin>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${query}" in your word list.`
          : `No results for "${query}" in your word list.`}
      </StyledResultDisplayNoMargin>
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

// Styles

export const StyledResultDisplay = styled.p`
  align-self: center;
`;
export const StyledResultDisplayNoMargin = styled.p`
  align-self: center;
  margin: 0 1rem -10px 1rem;
`;

export default SearchResults;

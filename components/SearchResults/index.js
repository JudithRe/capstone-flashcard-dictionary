// Styles Imports
import { StyledResultDisplayNoMargin } from "./styled.SearchResults";
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

export default SearchResults;

import styled from "styled-components";
import EntriesContainer from "../EntriesContainer";
import DictionaryResults from "../DictionaryResults";
import { StyledSubmitButton } from "../StyledComponents/StyledSubmitButton";
import { MainContent } from "../StyledComponents/MainContent";

function SearchResults({
  searchResults,
  query,
  dictionaryQuery,
  setDictionaryQuery,
  dictionaryResults,
  isLoading,
  hasEntries,
  setHasEntries,
  handleAddEntry,
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
      {searchResults.length > 0 && (
        <EntriesContainer
          wordList={searchResults}
          handleAddEntry={handleAddEntry}
        />
      )}
      {hasEntries && (
        <StyledSearchButton
          type="button"
          onClick={() => handleSearchDictionaryButtonSubmit()}
        >
          Search Dictionary
        </StyledSearchButton>
      )}
      <DictionaryResults
        query={query}
        dictionaryQuery={dictionaryQuery}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
        handleAddEntry={handleAddEntry}
      />
    </>
  );
}

export const StyledResultDisplay = styled.p`
  align-self: center;
`;

const StyledSearchButton = styled(StyledSubmitButton)`
  margin: auto;
`;

export default SearchResults;

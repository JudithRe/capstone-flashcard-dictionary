import EntriesContainer from "../EntriesContainer";
import {
  StyledResultDisplay,
  StyledResultDisplayNoMargin,
} from "../SearchResults";

function DictionaryResults({
  query,
  dictionaryQuery,
  dictionaryResults,
  dictionaryIsLoading,
  handleAddEntry,
}) {
  if (dictionaryQuery.length === 0) {
    return;
  }

  if (dictionaryIsLoading) {
    return (
      <StyledResultDisplay>Loading dictionary entries...</StyledResultDisplay>
    );
  }

  if (dictionaryResults) {
    return (
      <>
        <StyledResultDisplayNoMargin>
          {dictionaryResults.length > 0
            ? `${dictionaryResults.length} results for "${query}" from jisho.org`
            : `No results for "${query}"`}
        </StyledResultDisplayNoMargin>
        <EntriesContainer
          wordList={dictionaryResults}
          handleAddEntry={handleAddEntry}
        />
      </>
    );
  }
}
export default DictionaryResults;

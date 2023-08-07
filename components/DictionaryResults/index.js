import EntriesContainer from "../EntriesContainer";
import { StyledResultDisplay } from "../SearchResults";

function DictionaryResults({
  query,
  dictionaryQuery,
  dictionaryResults,
  isLoading,
}) {
  if (dictionaryQuery.length === 0) {
    return;
  }

  if (isLoading) {
    return (
      <StyledResultDisplay>Loading dictionary entries...</StyledResultDisplay>
    );
  }

  return (
    <>
      <StyledResultDisplay>
        {dictionaryResults.length > 0
          ? `${dictionaryResults.length} results for "${query}" from jisho.org`
          : `No results for "${query}"`}
      </StyledResultDisplay>
      <EntriesContainer wordList={dictionaryResults} />
    </>
  );
}

export default DictionaryResults;

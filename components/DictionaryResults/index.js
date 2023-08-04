import EntriesContainer from "../EntriesContainer";
import SearchResults, { StyledResultDisplay } from "../SearchResults";

function DictionaryResults({
  query,
  dictionaryQuery,
  dictionaryResults,
  isLoading,
}) {
  //   if (SearchResults.length > 0) {
  //     return;
  //   }

  if (dictionaryQuery.length === 0) {
    return;
  }

  if (isLoading) {
    return <p>Loading dictionary entries...</p>;
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

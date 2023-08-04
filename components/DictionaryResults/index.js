import EntriesContainer from "../EntriesContainer";
import SearchResults, { StyledResultDisplay } from "../SearchResults";

function DictionaryResults({ searchTerm, dictionaryResults, isLoading }) {
  //   if (SearchResults.length > 0) {
  //     return;
  //   }

  if (isLoading) {
    return <p>Loading dictionary entries...</p>;
  }

  return (
    <>
      <StyledResultDisplay>
        {dictionaryResults.length > 0
          ? `${dictionaryResults.length} results for "${searchTerm}" from jisho.org`
          : `No results for "${searchTerm}"`}
      </StyledResultDisplay>
      <EntriesContainer wordList={dictionaryResults} />
    </>
  );
}

export default DictionaryResults;

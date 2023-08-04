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
  console.log("query ", query);
  console.log("dictionaryQuery ", dictionaryQuery);
  console.log("dictionaryResults ", dictionaryResults);
  if (query.length === 0) {
    return;
  }

  // if (query.length > 0) {
  //   return (
  //     <>
  //       <StyledResultDisplay>
  //         {searchResults.length > 0
  //           ? `${searchResults.length} results for "${query}" in your word list.`
  //           : `No results for "${query}" in your word list.`}
  //       </StyledResultDisplay>
  //       <EntriesContainer wordList={searchResults} />
  //     </>
  //   );
  // }

  // if (query.length > 0 && dictionaryQuery.length > 0) {
  return (
    <>
      <StyledResultDisplay>
        {searchResults.length > 0
          ? `${searchResults.length} results for "${query}" in your word list.`
          : `No results for "${query}" in your word list.`}
      </StyledResultDisplay>
      <EntriesContainer wordList={searchResults} />
      <DictionaryResults
        query={query}
        dictionaryQuery={dictionaryQuery}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
        searchResults={searchResults}
      />
    </>
  );
}

export const StyledResultDisplay = styled.p`
  align-self: center;
`;

export default SearchResults;

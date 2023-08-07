import Heading from "@/components/PageHeading";
import SearchBar from "@/components/SearchBar";

import { MainContent } from "@/components/StyledComponents/MainContent";

export default function HomePage({
  query,
  setQuery,
  dictionaryQuery,
  setDictionaryQuery,
  searchResults,
  handleSearchInput,
  setDictionaryResults,
  dictionaryResults,
  dictionaryIsLoading,
  setSearchResults,
  handleAddEntry,
}) {
  return (
    <MainContent>
      <Heading PageTitle="Flashcard Dictionary Capstone" />
      <SearchBar
        query={query}
        setQuery={setQuery}
        dictionaryQuery={dictionaryQuery}
        setDictionaryQuery={setDictionaryQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setDictionaryResults={setDictionaryResults}
        dictionaryResults={dictionaryResults}
        dictionaryIsLoading={dictionaryIsLoading}
        handleAddEntry={handleAddEntry}
      />
    </MainContent>
  );
}

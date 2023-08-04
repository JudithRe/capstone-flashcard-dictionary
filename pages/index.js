import Heading from "@/components/PageHeading";
import SearchBar from "@/components/SearchBar";

import { MainContent } from "@/components/StyledComponents/MainContent";

export default function HomePage({
  query,
  setQuery,
  setDictionaryQuery,
  searchResults,
  handleSearchInput,
  setDictionaryResults,
  handleDictionarySearch,
  dictionaryResults,
  isLoading,
  setSearchResults,
}) {
  return (
    <MainContent>
      <Heading PageTitle="Flashcard Dictionary Capstone" />
      <SearchBar
        query={query}
        setQuery={setQuery}
        setDictionaryQuery={setDictionaryQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
        setDictionaryResults={setDictionaryResults}
        handleDictionarySearch={handleDictionarySearch}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
        setSearchResults={setSearchResults}
      />
    </MainContent>
  );
}

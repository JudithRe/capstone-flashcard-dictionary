import JG from "@/assets/icons/JG";
import Heading from "@/components/PageHeading";
import SearchBar from "@/components/SearchBar";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { useEffect } from "react";
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
  setActivePage,
}) {
  useEffect(() => {
    setActivePage("home");
  }, [setActivePage]);

  return (
    <MainContent>
      <Heading
        PageTitle={
          <span
            className="transparent-background-color"
            role="h1"
            aria-label="Jisho Genius"
          >
            <JG />
          </span>
        }
      />

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

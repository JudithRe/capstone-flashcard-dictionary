import Heading from "@/components/PageHeading";
import SearchBar from "@/components/SearchBar";

import { MainContent } from "@/components/StyledComponents/MainContent";

export default function HomePage({
  query,
  setQuery,
  searchResults,
  handleSearchInput,
}) {
  return (
    <MainContent>
      <Heading PageTitle="Flashcard Dictionary Capstone" />
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
      />
    </MainContent>
  );
}

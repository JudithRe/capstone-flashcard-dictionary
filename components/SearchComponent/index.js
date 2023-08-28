// Styles Imports
import SearchIcon from "@/assets/icons/SearchIcon";
import {
  StyledSearchBar,
  StyledSearchBarButton,
  StyledSearchBarForm,
  StyledStickyDivLargeMargin,
} from "./styled.SearchComponent";

//Components Imports
import SearchResults from "../SearchResults";

// Functions and Dependencies Imports
import { useEffect } from "react";

function SearchComponent({
  query,
  handleSetQuery,
  dictionaryQuery,
  handleSetDictionaryQuery,
  handleSearchInput,
  searchResults,
  handleSearchResults,
  handleSetDictionaryResults,
  dictionaryResults,
  dictionaryIsLoading,
  handleAddEntry,
  hasEntries,
  handleHasEntries,
}) {
  useEffect(() => {
    handleSearchResults(searchResults);
  }, [searchResults, handleSearchResults]);

  function handleSearchBarSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const searchQuery = Object.fromEntries(formData);

    handleSetQuery(searchQuery.searchInput.toLowerCase());
    handleSearchInput(searchQuery.searchInput.toLowerCase());
    handleHasEntries(true);

    // Search Dictionary if no searchResults in list
    if (searchResults.length === 0 && query.length > 0) {
      handleSetDictionaryQuery(searchQuery.searchInput.toLowerCase());
      handleHasEntries(false);
    }

    form.reset();
  }

  // OnChange look up the words
  function handleSearchBarOnInput(query) {
    handleSetDictionaryQuery("");
    handleSearchResults([]);
    handleSetDictionaryResults([]);

    handleSetQuery(query);
    handleSearchInput(query);
  }

  return (
    <>
      <StyledStickyDivLargeMargin>
        <StyledSearchBarForm onSubmit={(event) => handleSearchBarSubmit(event)}>
          <StyledSearchBar
            onChange={(event) =>
              handleSearchBarOnInput(event.target.value.toLowerCase())
            }
            type="text"
            placeholder='Dictionary Search on "enter"'
            aria-label="search-bar"
            name="searchInput"
          />
          <StyledSearchBarButton>
            <span role="img" aria-label="Search">
              <SearchIcon height="25px" width="25px" />
            </span>
          </StyledSearchBarButton>
        </StyledSearchBarForm>
      </StyledStickyDivLargeMargin>

      <SearchResults
        searchResults={searchResults}
        query={query}
        dictionaryQuery={dictionaryQuery}
        handleSetDictionaryQuery={handleSetDictionaryQuery}
        dictionaryResults={dictionaryResults}
        dictionaryIsLoading={dictionaryIsLoading}
        hasEntries={hasEntries}
        handleHasEntries={handleHasEntries}
        handleAddEntry={handleAddEntry}
      />
    </>
  );
}

export default SearchComponent;

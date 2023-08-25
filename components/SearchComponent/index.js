// Styles Imports
import styled from "styled-components";
import SearchIcon from "@/assets/icons/SearchIcon";

//Components Imports
import SearchResults from "../SearchResults";

// Functions and Dependencies Imports
import { useEffect } from "react";
import { device } from "@/utils/globalValues";

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

// Styles

export const StyledSearchBarForm = styled.form`
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: var(--dark-mode-text-color);
  padding: 10px;
  border: 2px solid var(--light-grey);
  border-radius: 25px;
  z-index: 3;
  box-shadow: var(--default-box-shadow);
  position: sticky;
  top: 5rem;

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const StyledSearchBar = styled.input`
  background-color: inherit;
  padding: 10px;
  border: none;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

export const StyledSearchBarButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 11px;
`;

const StyledStickyDivLargeMargin = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  position: sticky;
  top: 3.5rem;
  width: 100%;
`;

export default SearchComponent;

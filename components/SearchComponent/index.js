import styled from "styled-components";
import SearchResults from "../SearchResults";
import { useEffect } from "react";
import SearchIcon from "@/assets/icons/SearchIcon";

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

  // OnChange should still look up the words
  function handleSearchBarOnInput(query) {
    // Empty useStates before searching for new word
    handleSetDictionaryQuery("");
    handleSearchResults([]);
    handleSetDictionaryResults([]);

    // search in word List
    handleSetQuery(query);
    handleSearchInput(query);
  }

  return (
    <>
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
          <span
            className="inherit-background-color"
            role="img"
            aria-label="Search"
          >
            <SearchIcon height="30px" width="30px" />
          </span>
        </StyledSearchBarButton>
      </StyledSearchBarForm>

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
const StyledSearchBarForm = styled.form`
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: var(--dark-mode-text-color);
  padding: 10px;
  border-radius: 25px;
  z-index: 3;
  box-shadow: var(--default-box-shadow);
  position: sticky;
  top: 5rem;
`;

const StyledSearchBar = styled.input`
  background-color: inherit;
  padding: 10px;
  border: none;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

const StyledSearchBarButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0 15px;
`;

export default SearchComponent;

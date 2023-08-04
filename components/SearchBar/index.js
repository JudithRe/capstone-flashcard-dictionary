import styled from "styled-components";
import SearchResults from "../SearchResults";
import { useEffect } from "react";
import refactorDictionaryOutput from "@/utils/refactorDictionaryOutput";

function SearchBar({
  query,
  setQuery,
  handleSearchInput,
  searchResults,
  setSearchResults,
  setDictionaryResults,
  dictionaryResults,
  handleDictionarySearch,
  isLoading,
}) {
  function handleSearchBarSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const searchQuery = Object.fromEntries(formData);

    setQuery(searchQuery.searchInput);
    handleSearchInput(searchQuery.searchInput);

    if (searchResults.length === 0) {
      handleDictionarySearch(searchQuery.searchInput);
    }

    form.reset();
  }

  //OnChange should still look up the words
  function handleSearchBarOnInput(query) {
    setSearchResults([]);
    setDictionaryResults([]);
    setQuery(query);
    handleSearchInput(query);
  }

  return (
    <>
      <StyledSearchBarForm onSubmit={(event) => handleSearchBarSubmit(event)}>
        <StyledSearchBar
          // onChange={(event) => handleSearchBarOnInput(event.target.value)}
          type="text"
          placeholder="Search..."
          aria-label="search-bar"
          name="searchInput"
        />
        <StyledSearchBarButton>🔍</StyledSearchBarButton>
      </StyledSearchBarForm>

      <SearchResults
        searchResults={searchResults}
        searchTerm={query}
        handleSearchInput={handleSearchInput}
        dictionaryResults={dictionaryResults}
        isLoading={isLoading}
      />
    </>
  );
}
const StyledSearchBarForm = styled.form`
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 10px;
  border-radius: 25px;
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

export default SearchBar;

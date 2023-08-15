import styled from "styled-components";
import SearchResults from "../SearchResults";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/icons/SearchIcon";

function SearchBar({
  query,
  setQuery,
  dictionaryQuery,
  setDictionaryQuery,
  handleSearchInput,
  searchResults,
  setSearchResults,
  setDictionaryResults,
  dictionaryResults,
  dictionaryIsLoading,
  handleAddEntry,
}) {
  const [hasEntries, setHasEntries] = useState(false);
  useEffect(() => {
    setSearchResults(searchResults);
  }, [searchResults, setSearchResults]);

  function handleSearchBarSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const searchQuery = Object.fromEntries(formData);

    setQuery(searchQuery.searchInput.toLowerCase());
    handleSearchInput(searchQuery.searchInput.toLowerCase());
    setHasEntries(true);

    // Search Dictionary if no searchResults in list
    if (searchResults.length === 0 && query.length > 0) {
      setDictionaryQuery(searchQuery.searchInput.toLowerCase());

      setHasEntries(false);
    }

    form.reset();
  }

  // OnChange should still look up the words
  function handleSearchBarOnInput(query) {
    // Empty useStates before searching for new word
    setDictionaryQuery("");
    setSearchResults([]);
    setDictionaryResults([]);

    // search in word List
    setQuery(query);
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
          placeholder="Search... (hit enter to search the dictionary)"
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
        setDictionaryQuery={setDictionaryQuery}
        dictionaryResults={dictionaryResults}
        dictionaryIsLoading={dictionaryIsLoading}
        hasEntries={hasEntries}
        setHasEntries={setHasEntries}
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
  z-index: 5;
  box-shadow: var(--default-box-shadow);
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

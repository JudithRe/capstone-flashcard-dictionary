// Styles Imports
import SearchIcon from "@/assets/icons/SearchIcon";
import {
  StyledSearchBar,
  StyledSearchBarButton,
  StyledSearchBarForm,
} from "../SearchComponent/styled.SearchComponent";

// Functions and Dependencies Imports
import { useRouter } from "next/router";

function SearchBar({
  query,
  handleSetQuery,
  handleSetDictionaryQuery,
  handleSearchInput,
  searchResults,
  handleHasEntries,
}) {
  const router = useRouter();

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

    router.push("/add");
  }

  return (
    <>
      <StyledSearchBarForm onSubmit={(event) => handleSearchBarSubmit(event)}>
        <StyledSearchBar
          type="text"
          placeholder="Search..."
          aria-label="search-bar"
          name="searchInput"
        />
        <StyledSearchBarButton>
          <span role="img" aria-label="Search">
            <SearchIcon height="25px" width="25px" />
          </span>
        </StyledSearchBarButton>
      </StyledSearchBarForm>
    </>
  );
}

export default SearchBar;

import styled from "styled-components";
import SearchIcon from "@/assets/icons/SearchIcon";
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

    router.push("/search");
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
          <span
            className="inherit-background-color"
            role="img"
            aria-label="Search"
          >
            <SearchIcon height="30px" width="30px" />
          </span>
        </StyledSearchBarButton>
      </StyledSearchBarForm>
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

import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import SearchComponent from "@/components/SearchComponent";
import { MainContent, Spacer } from "@/components/StyledComponents/MainContent";

import { StyledSecondaryButtonRight } from "@/components/StyledComponents/StyledButtons";
import {
  StyledSection,
  StyledSectionFixedTopRight,
} from "@/components/StyledComponents/StyledSection";
import { hasToken } from "@/utils/checkUser";
import { useState } from "react";

export async function getServerSideProps(context) {
  const token = await hasToken(context.req);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
export default function Search({
  query,
  handleSetQuery,
  dictionaryQuery,
  handleSetDictionaryQuery,
  searchResults,
  handleSearchInput,
  handleSetDictionaryResults,
  dictionaryResults,
  dictionaryIsLoading,
  handleSearchResults,
  handleAddEntry,
  hasEntries,
  handleHasEntries,
  activeUser,
  categoryData,
  handleAddCategory,
  newEntries,
}) {
  const [isSearch, setIsSearch] = useState(true);
  return (
    <>
      <Heading PageTitle="Search and Add Words" />
      <MainContent>
        <StyledSectionFixedTopRight>
          <StyledSecondaryButtonRight onClick={() => setIsSearch(!isSearch)}>
            {isSearch
              ? "Create your own entry"
              : "Search for words in the dictionary"}
          </StyledSecondaryButtonRight>
        </StyledSectionFixedTopRight>
        <Spacer />
        {isSearch && (
          <SearchComponent
            query={query}
            handleSetQuery={handleSetQuery}
            dictionaryQuery={dictionaryQuery}
            handleSetDictionaryQuery={handleSetDictionaryQuery}
            handleSearchInput={handleSearchInput}
            searchResults={searchResults}
            handleSearchResults={handleSearchResults}
            handleSetDictionaryResults={handleSetDictionaryResults}
            dictionaryResults={dictionaryResults}
            dictionaryIsLoading={dictionaryIsLoading}
            handleAddEntry={handleAddEntry}
            hasEntries={hasEntries}
            handleHasEntries={handleHasEntries}
          />
        )}

        {!isSearch && (
          <>
            <AddEntryForm
              handleAddEntry={handleAddEntry}
              activeUser={activeUser}
              categoryData={categoryData}
              handleAddCategory={handleAddCategory}
              newEntries={newEntries}
            />
            {newEntries.length > 0 && (
              <StyledSection>
                <h2>Recently Added Words</h2>
                <EntriesContainer wordList={newEntries} />
              </StyledSection>
            )}
          </>
        )}
      </MainContent>
    </>
  );
}

// Style Imports
import { StyledCenterAlign } from "@/components/StyledComponents/StyledSection";
import { Spacer } from "@/components/StyledComponents/MainContent";

// Component Imports
import SearchBar from "@/components/OnPageSearchBar";
import StudyDisplay from "@/components/StudyDisplay";
import Heading from "@/components/PageHeading";

// Function and Dependency Imports
import { hasToken } from "@/utils/checkUser";
import { useSession } from "next-auth/react";

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
export default function HomePage({
  wordList,
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
  activeUser,
  databaseIsLoading,
  handleHasEntries,
}) {
  const { data: session } = useSession();
  return (
    <>
      <Heading>
        {session?.user?.username}さん、
        <br />
        こんにちは。
      </Heading>
      <Spacer />
      <Spacer />
      <SearchBar
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
        handleHasEntries={handleHasEntries}
      />
      <StyledCenterAlign>
        <StudyDisplay
          wordList={wordList}
          activeUser={activeUser}
          databaseIsLoading={databaseIsLoading}
        />
      </StyledCenterAlign>
    </>
  );
}

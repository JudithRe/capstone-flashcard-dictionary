import SearchBar from "@/components/OnPageSearchBar";
import StudyDisplay from "@/components/StudyDisplay";

import { StyledCenterAlign } from "@/components/StyledComponents/StyledSection";
import { hasToken } from "@/utils/checkUser";
import { useSession } from "next-auth/react";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";

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
      <MainContent>
        <Heading>
          {session?.user?.username}さん、
          <br />
          こんにちは。
        </Heading>

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
      </MainContent>
    </>
  );
}

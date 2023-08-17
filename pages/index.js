import JG from "@/assets/icons/JG";
import SearchBar from "@/components/OnPageSearchBar";
import Heading from "@/components/PageHeading";

import Signout from "@/components/Signout";
import StudyDisplay from "@/components/StudyDisplay";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledCenterAlign } from "@/components/StyledComponents/StyledSection";
import { hasToken } from "@/utils/checkUser";

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

  handleHasEntries,
}) {
  return (
    <>
      <Heading
        PageTitle={
          <span
            className="transparent-background-color"
            role="h1"
            aria-label="Jisho Genius"
          >
            <JG />
          </span>
        }
      />
      <MainContent>
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
          <StudyDisplay wordList={wordList} activeUser={activeUser} />
        </StyledCenterAlign>
        <Signout />
      </MainContent>
    </>
  );
}

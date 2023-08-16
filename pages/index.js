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
  setQuery,
  dictionaryQuery,
  setDictionaryQuery,
  searchResults,
  handleSearchInput,
  setDictionaryResults,
  dictionaryResults,
  dictionaryIsLoading,
  setSearchResults,
  handleAddEntry,
  activeUser,

  setHasEntries,
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
          setQuery={setQuery}
          dictionaryQuery={dictionaryQuery}
          setDictionaryQuery={setDictionaryQuery}
          handleSearchInput={handleSearchInput}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setDictionaryResults={setDictionaryResults}
          dictionaryResults={dictionaryResults}
          dictionaryIsLoading={dictionaryIsLoading}
          handleAddEntry={handleAddEntry}
          setHasEntries={setHasEntries}
        />
        <StyledCenterAlign>
          <StudyDisplay wordList={wordList} activeUser={activeUser} />
        </StyledCenterAlign>
        <Signout />
      </MainContent>
    </>
  );
}

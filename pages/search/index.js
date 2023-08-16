import JG from "@/assets/icons/JG";
import Heading from "@/components/PageHeading";
import SearchComponent from "@/components/SearchComponent";
import { MainContent } from "@/components/StyledComponents/MainContent";
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
export default function Search({
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
  hasEntries,
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
        <SearchComponent
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
          hasEntries={hasEntries}
          setHasEntries={setHasEntries}
        />
      </MainContent>
    </>
  );
}

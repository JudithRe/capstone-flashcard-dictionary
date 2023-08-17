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
      </MainContent>
    </>
  );
}

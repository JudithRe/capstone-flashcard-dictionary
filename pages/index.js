import JG from "@/assets/icons/JG";
import Heading from "@/components/PageHeading";
import SearchBar from "@/components/SearchBar";
import Signout from "@/components/Signout";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { useEffect } from "react";
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
  handleActivePage,
  handleActiveUser,
}) {
  const { data: session } = useSession();

  useEffect(() => {
    handleActivePage("home");
    handleActiveUser(session?.user._id);
  }, [handleActivePage, handleActiveUser, session]);

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
        />
        <Signout />
      </MainContent>
    </>
  );
}

import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import * as wanakana from "wanakana";
import { convertToKana } from "@/utils/helperFunctions";
import { handleDictionaryOutput } from "@/utils/refactorDictionaryOutput";
import useSWR from "swr";
import { SessionProvider } from "next-auth/react";
import {} from "next-auth/react";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return await response.json();
};
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // States
  const [query, setQuery] = useState("");
  const [dictionaryQuery, setDictionaryQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dictionaryResults, setDictionaryResults] = useState([]);
  const [isDetailEditMode, setIsDetailEditMode] = useState(false);
  const [activeUser, setActiveUser] = useState({
    _id: "default",
    streak: 0,
    lastStreakUpdate: 0,
  });
  const [hasEntries, setHasEntries] = useState(false);

  function handleSetDictionaryResults(dictionaryResults) {
    setDictionaryResults(dictionaryResults);
  }

  function handleSearchResults(searchResults) {
    setSearchResults(searchResults);
  }

  function handleSetDictionaryQuery(queryText) {
    setDictionaryQuery(queryText);
  }

  function handleHasEntries(boolean) {
    setHasEntries(boolean);
  }

  function handleSetQuery(queryText) {
    setQuery(queryText);
  }
  function handleActiveUser(activeUserId, streak, update) {
    setActiveUser({
      _id: activeUserId,
      streak: streak,
      lastStreakUpdate: update,
    });
  }

  function handleDetailEditMode(boolean) {
    setIsDetailEditMode(boolean);
  }

  // Fetching from Dictionary
  const DictionaryURL = `/api/dictionary-search/${dictionaryQuery}`;
  const { data: dictionaryData, isLoading: dictionaryIsLoading } = useSWR(
    DictionaryURL,
    fetcher
  );

  // Fetching from Word List
  const DatabaseURL = `/api/word-list/${
    activeUser._id ? activeUser._id : "loading"
  }`; // Only fetching data for activeUser
  const {
    data: databaseData,
    isLoading: databaseIsLoading,
    mutate: databaseMutate,
  } = useSWR(DatabaseURL, fetcher);

  // Fetching Category
  const CategoryURL = `/api/word-list/category/${
    activeUser._id ? activeUser._id : "loading"
  }`; // Only fetching data for activeUser
  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    mutate: categoryMutate,
  } = useSWR(CategoryURL, fetcher);

  // Add Entry to Word List
  async function handleAddEntry(newEntry) {
    const entryWithoutAddButton = { ...newEntry, showAddButton: false };

    const response = await fetch(DatabaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryWithoutAddButton),
    });

    if (response.ok) {
      databaseMutate();
    }
  }

  // Add Category
  async function handleAddCategory(newCategory) {
    const response = await fetch(CategoryURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    });

    if (response.ok) {
      categoryMutate();
    }
  }

  // Search Word List
  function handleSearchInput(query) {
    handleSearchResults([]);
    const searchedRegex = new RegExp(query, "i");

    // Check for input types
    if (!wanakana.isKana(query)) {
      const englishResults = databaseData.filter((item) =>
        searchedRegex.test(item.english)
      );

      // Search for words that have a reading in Kana with the same spelling
      const japaneseRegEx = new RegExp(convertToKana(query), "i");
      const japaneseResults = databaseData.filter((item) =>
        japaneseRegEx.test(item.japanese.reading)
      );

      handleSearchResults([...englishResults, ...japaneseResults]);
    }

    // If all Kana only search Reading
    if (wanakana.isKana(query)) {
      const results = databaseData.filter((item) =>
        searchedRegex.test(item.japanese.reading)
      );
      handleSearchResults(results);
    }

    // If Kanjis are included search Japanese Definition
    if (wanakana.isKanji(query) || wanakana.isMixed(query)) {
      const results = databaseData.filter((item) =>
        searchedRegex.test(item.japanese.word)
      );
      handleSearchResults(results);
    }
  }

  // Search Dictionary and check if word is already in Word List
  useEffect(() => {
    handleSetDictionaryResults([]);

    if (dictionaryData && databaseData) {
      const structuredOutput = handleDictionaryOutput({
        dictionaryData,
        databaseData,
        activeUser,
      });
      handleSetDictionaryResults(structuredOutput);
    }
  }, [dictionaryQuery, dictionaryData, databaseData, activeUser]);

  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component
          wordList={databaseData}
          databaseIsLoading={databaseIsLoading}
          databaseMutate={databaseMutate}
          handleAddEntry={handleAddEntry}
          query={query}
          handleSetQuery={handleSetQuery}
          dictionaryQuery={dictionaryQuery}
          handleSetDictionaryQuery={handleSetDictionaryQuery}
          handleSearchInput={handleSearchInput}
          searchResults={searchResults}
          handleSearchResults={handleSearchResults}
          dictionaryResults={dictionaryResults}
          handleSetDictionaryResults={handleSetDictionaryResults}
          dictionaryIsLoading={dictionaryIsLoading}
          handleDetailEditMode={handleDetailEditMode}
          isDetailEditMode={isDetailEditMode}
          activeUser={activeUser}
          hasEntries={hasEntries}
          handleHasEntries={handleHasEntries}
          handleAddCategory={handleAddCategory}
          categoryData={categoryData}
          categoryMutate={categoryMutate}
          {...pageProps}
        />
        <Layout handleActiveUser={handleActiveUser} />
      </SessionProvider>
    </>
  );
}

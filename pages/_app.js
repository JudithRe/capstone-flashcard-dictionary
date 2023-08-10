import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import * as wanakana from "wanakana";
import { convertToKana } from "@/utils/helperFunctions";
import { handleDictionaryOutput } from "@/utils/refactorDictionaryOutput";
import useSWR from "swr";

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
export default function App({ Component, pageProps }) {
  // States
  const [query, setQuery] = useState("");
  const [dictionaryQuery, setDictionaryQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dictionaryResults, setDictionaryResults] = useState([]);
  const [isDetailEditMode, setIsDetailEditMode] = useState(false);
  const [activePage, setActivePage] = useState("home");

  // Fetching from Dictionary
  const DictionaryURL = `/api/dictionary-search/${dictionaryQuery}`;
  const { data: dictionaryData, isLoading: dictionaryIsLoading } = useSWR(
    DictionaryURL,
    fetcher
  );

  // Fetching from database
  const DatabaseURL = `/api/word-list/`;
  const {
    data: databaseData,
    isLoading: databaseIsLoading,
    mutate: databaseMutate,
  } = useSWR(DatabaseURL, fetcher);

  // Add Entry to Word List
  async function handleAddEntry(newEntry) {
    const entryWithoutAddButton = { ...newEntry, showAddButton: false };

    const response = await fetch("/api/word-list", {
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

  // Search Word List
  function handleSearchInput(query) {
    setSearchResults([]);
    const searchedRegex = new RegExp(query, "i");

    //Check for input types
    if (!wanakana.isKana(query)) {
      const englishResults = databaseData.filter((item) =>
        searchedRegex.test(item.english)
      );

      //Search for words that have a reading in Kana with the same spelling
      const japaneseRegEx = new RegExp(convertToKana(query), "i");
      const japaneseResults = databaseData.filter((item) =>
        japaneseRegEx.test(item.japanese.reading)
      );

      setSearchResults([...englishResults, ...japaneseResults]);
    }

    //If all Kana only search Reading
    if (wanakana.isKana(query)) {
      const results = databaseData.filter((item) =>
        searchedRegex.test(item.japanese.reading)
      );
      setSearchResults(results);
    }

    //If Kanjis are included search Japanese Definition
    if (wanakana.isKanji(query) || wanakana.isMixed(query)) {
      const results = databaseData.filter((item) =>
        searchedRegex.test(item.japanese.word)
      );
      setSearchResults(results);
    }
  }

  // Search Dictionary and check if word is already in Word List
  useEffect(() => {
    setDictionaryResults([]);

    if (dictionaryData && databaseData) {
      const structuredOutput = handleDictionaryOutput({
        dictionaryData,
        databaseData,
      });
      setDictionaryResults(structuredOutput);
    }
  }, [dictionaryQuery, dictionaryData, databaseData]);

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={databaseData}
        databaseIsLoading={databaseIsLoading}
        databaseMutate={databaseMutate}
        handleAddEntry={handleAddEntry}
        query={query}
        setQuery={setQuery}
        dictionaryQuery={dictionaryQuery}
        setDictionaryQuery={setDictionaryQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        dictionaryResults={dictionaryResults}
        setDictionaryResults={setDictionaryResults}
        dictionaryIsLoading={dictionaryIsLoading}
        setIsDetailEditMode={setIsDetailEditMode}
        isDetailEditMode={isDetailEditMode}
        activePage={activePage}
        setActivePage={setActivePage}
        {...pageProps}
      />
      <Layout activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}

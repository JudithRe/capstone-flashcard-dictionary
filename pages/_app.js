import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { dummyData } from "./api/dummyData";
import Layout from "@/components/Layout";
import * as wanakana from "wanakana";
import { convertToKana } from "@/utils/helperFunctions";
import refactorDictionaryOutput, {
  checkWordList,
} from "@/utils/refactorDictionaryOutput";
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
  const [wordList, setWordList] = useState(dummyData);
  const [searchResults, setSearchResults] = useState([]);
  const [dictionaryResults, setDictionaryResults] = useState([]);

  // Fetching from Dictionary
  const DictionaryURL = `/api/dictionary-search/${dictionaryQuery}`;
  const { data, isLoading, mutate } = useSWR(DictionaryURL, fetcher);

  // Add Entry to Word List
  function handleAddEntry(newEntry) {
    setWordList([{ ...newEntry, showAddButton: false }, ...wordList]);
  }

  // Search Word List
  function handleSearchInput(query) {
    setSearchResults([]);
    const searchedRegex = new RegExp(query, "i");

    //Check for input types
    if (!wanakana.isKana(query)) {
      const englishResults = wordList.filter((item) =>
        searchedRegex.test(item.english)
      );

      //Search for words that have a reading in Kana with the same spelling
      const japaneseRegEx = new RegExp(convertToKana(query), "i");
      const japaneseResults = wordList.filter((item) =>
        japaneseRegEx.test(item.japanese.reading)
      );

      setSearchResults([...englishResults, ...japaneseResults]);
    }

    //If all Kana only search Reading
    if (wanakana.isKana(query)) {
      const results = wordList.filter((item) =>
        searchedRegex.test(item.japanese.reading)
      );
      setSearchResults(results);
    }

    //If Kanjis are included search Japanese Definition
    if (wanakana.isKanji(query) || wanakana.isMixed(query)) {
      const results = wordList.filter((item) =>
        searchedRegex.test(item.japanese.word)
      );
      setSearchResults(results);
    }
  }

  // Search Dictionary and check if word is already in Word List
  useEffect(() => {
    setDictionaryResults([]);

    if (data) {
      const structuredOutput = refactorDictionaryOutput(data);
      const checkedOutput = structuredOutput.map((entry) => {
        const isInWordList = wordList.find(
          (wordListEntry) => wordListEntry.slug === entry.slug
        );
        if (isInWordList) {
          return { ...entry, showAddButton: false };
        }
        return entry;
      });

      // setDictionaryResults(structuredOutput);
      setDictionaryResults(checkedOutput);
    }
  }, [dictionaryQuery, data, wordList]);

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={wordList}
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
        isLoading={isLoading}
        {...pageProps}
      />
      <Layout />
    </>
  );
}

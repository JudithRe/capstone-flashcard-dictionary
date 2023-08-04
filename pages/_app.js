import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { dummyData } from "./api/dummyData";
import Layout from "@/components/Layout";
import * as wanakana from "wanakana";
import { convertToKana } from "@/utils/helperFunctions";
import refactorDictionaryOutput from "@/utils/refactorDictionaryOutput";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};
export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState("");
  const [dictionaryQuery, setDictionaryQuery] = useState("");
  const DictionaryURL = `/api/dictionary-search/${dictionaryQuery}`;
  const { data, error, isLoading, mutate } = useSWR(DictionaryURL, fetcher);
  const [wordList, setWordList] = useState(dummyData);
  const [searchResults, setSearchResults] = useState([]);
  const [dictionaryResults, setDictionaryResults] = useState([]);

  function handleAddEntry({ newEntry }) {
    console.log("newEntry ", newEntry);
    const { japaneseInput, reading, englishInput } = newEntry;
    const newEntryObject = {
      isDictionaryEntry: false,
      slug: japaneseInput,
      japanese: {
        word: japaneseInput,
        reading: reading,
      },
      english: englishInput.split(", "),

      study: {
        lastReview: "new",
        stage: 0,
        interval: 0.5,
        wrongAnswerCount: 0,
        rightAnswerCount: 0,
        ease: 2.5,
        streak: 0,
      },
    };

    setWordList([newEntryObject, ...wordList]);
  }

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

  useEffect(() => {
    setDictionaryResults([]);

    mutate();
    if (data) {
      const structuredOutput = refactorDictionaryOutput(data);
      setDictionaryResults(structuredOutput);
    }
  }, [dictionaryQuery, mutate, data]);

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={wordList}
        handleAddEntry={handleAddEntry}
        query={query}
        setQuery={setQuery}
        setDictionaryQuery={setDictionaryQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        dictionaryResults={dictionaryResults}
        setDictionaryResults={setDictionaryResults}
        // handleDictionarySearch={handleDictionarySearch}
        isLoading={isLoading}
        {...pageProps}
      />
      <Layout />
    </>
  );
}

import { useState } from "react";
import GlobalStyle from "../styles";
import { dummyData } from "./api/dummyData";
import Layout from "@/components/Layout";
import * as wanakana from "wanakana";
import { convertToKana } from "@/utils/helperFunctions";

export default function App({ Component, pageProps }) {
  const [wordList, setWordList] = useState(dummyData);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleAddEntry({ newEntry }) {
    const { japaneseInput, reading, englishInput } = newEntry;
    const newEntryObject = {
      isDictionaryEntry: false,
      slug: japaneseInput,
      japanese: [
        {
          word: japaneseInput,
          reading: reading,
        },
      ],
      senses: [
        {
          english_definitions: englishInput.split(", "),
        },
      ],

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
    const searchedRegex = new RegExp(query, "i");

    //Check for input types
    if (!wanakana.isKana(query)) {
      const englishResults = wordList.filter((item) =>
        searchedRegex.test(item.senses[0].english_definitions)
      );

      //Search for words that have a reading in Kana with the same spelling
      const japaneseRegEx = new RegExp(convertToKana(query), "i");
      const japaneseResults = wordList.filter((item) =>
        japaneseRegEx.test(item.japanese[0].reading)
      );

      setSearchResults([...englishResults, ...japaneseResults]);
    }

    //If all Kana only search Reading
    if (wanakana.isKana(query)) {
      const results = wordList.filter((item) =>
        searchedRegex.test(item.japanese[0].reading)
      );
      setSearchResults(results);
    }

    //If Kanjis are included search Japanese Definition
    if (wanakana.isKanji(query) || wanakana.isMixed(query)) {
      const results = wordList.filter((item) =>
        searchedRegex.test(item.japanese[0].word)
      );
      setSearchResults(results);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={wordList}
        handleAddEntry={handleAddEntry}
        query={query}
        setQuery={setQuery}
        handleSearchInput={handleSearchInput}
        searchResults={searchResults}
        {...pageProps}
      />
      <Layout />
    </>
  );
}

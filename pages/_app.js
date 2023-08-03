import { useState } from "react";
import GlobalStyle from "../styles";
import { dummyData } from "./api/dummyData";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [wordList, setWordList] = useState(dummyData);

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
          english_definitions: [englishInput],
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

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={wordList}
        handleAddEntry={handleAddEntry}
        {...pageProps}
      />
      <Layout />
    </>
  );
}

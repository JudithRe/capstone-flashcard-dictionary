import { useState } from "react";
import GlobalStyle from "../styles";
import { dummyData } from "./api/dummyData";

export default function App({ Component, pageProps }) {
  const [wordList, setWordList] = useState(dummyData);

  function handleAddEntry({ newEntry }) {
    const { jpInput, reading, enInput } = newEntry;
    setWordList([
      {
        isDictionaryEntry: false,
        slug: jpInput,
        japanese: [
          {
            word: jpInput,
            reading: reading,
          },
        ],
        senses: [
          {
            english_definitions: [enInput],
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
      },
      ...wordList,
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        wordList={wordList}
        handleAddEntry={handleAddEntry}
        {...pageProps}
      />
    </>
  );
}

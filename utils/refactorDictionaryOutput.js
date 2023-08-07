export function handleDictionaryOutput(dictionaryOutput, wordList) {
  const structuredDictionaryObject = dictionaryOutput["data"].map((entry) => ({
    showAddButton: true,
    isDictionaryEntry: true,
    slug: entry["slug"],
    japanese: {
      word: `${
        entry["japanese"][0]["word"]
          ? entry["japanese"][0]["word"]
          : entry["slug"]
      }`,
      reading: entry["japanese"][0]["reading"],
    },
    english: entry["senses"][0]["english_definitions"],
    study: {
      lastReview: "never",
      stage: 0,
      interval: 1,
      wrongAnswerCount: 0,
      rightAnswerCount: 0,
      ease: 2.5,
      streak: 0,
    },
  }));

  const checkedDictionaryOutput = structuredDictionaryObject.map((entry) => {
    const isInWordList = wordList.find(
      (wordListEntry) => wordListEntry.slug === entry.slug
    );
    if (isInWordList) {
      return { ...entry, showAddButton: false };
    }
    return entry;
  });
  return checkedDictionaryOutput;

  // return structuredDictionaryObject;
}

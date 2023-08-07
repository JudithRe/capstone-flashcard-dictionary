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

function refactorDictionaryOutput(dictionaryOutput) {
  const structuredDictionaryObject = dictionaryOutput["data"].map((entry) => ({
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

  return structuredDictionaryObject;
}

export default refactorDictionaryOutput;

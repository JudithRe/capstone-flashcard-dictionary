export function handleDictionaryOutput({
  dictionaryData,
  databaseData,
  activeUser,
}) {
  if (dictionaryData) {
    const structuredDictionaryObject = dictionaryData["data"].map((entry) => ({
      userId: activeUser._id,
      showAddButton: true,
      isDictionaryEntry: true,
      slug: entry["slug"],
      isCommon: entry["is_common"],
      jlpt: entry["jlpt"][0],
      wanikani: entry["tags"][0],
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
        lastReview: "new",
        stage: 0,
        lastWasWrongAnswer: false,
        wrongAnswerCount: 0,
        rightAnswerCount: 0,
        streak: 0,
      },
    }));

    const checkedDictionaryOutput = structuredDictionaryObject.map((entry) => {
      const isInWordList = databaseData.find(
        (wordListEntry) => wordListEntry.slug === entry.slug
      );

      if (isInWordList) {
        return { ...entry, showAddButton: false };
      }
      return entry;
    });

    return checkedDictionaryOutput;
  }
}

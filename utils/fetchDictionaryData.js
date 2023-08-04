import refactorDictionaryOutput from "./refactorDictionaryOutput";

async function fetchDictionaryData({ query, setDictionaryResults }) {
  try {
    const response = await fetch(`/api/dictionary-search/${query}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const dictionaryData = await response.json();
    const structuredOutput = refactorDictionaryOutput(dictionaryData);
    setDictionaryResults(structuredOutput);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function handleDictionarySearch({
  searchResults,
  setSearchResults,
  query,
  setDictionaryResults,
  dictionaryResults,
}) {
  if (searchResults.length === 0) {
    console.log("hello");
    // fetchDictionaryData({ query, setDictionaryResults });
    try {
      const response = await fetch(`/api/dictionary-search/${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const dictionaryData = await response.json();
      const structuredOutput = refactorDictionaryOutput(dictionaryData);
      setDictionaryResults(structuredOutput);
      setSearchResults([...searchResults, ...dictionaryResults]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export default fetchDictionaryData;

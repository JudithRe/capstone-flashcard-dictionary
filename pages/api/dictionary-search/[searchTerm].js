import JishoAPI from "unofficial-jisho-api";

const jisho = new JishoAPI();

export default async function handler(req, res) {
  const searchedTerm = req.query.searchTerm;

  try {
    const data = await jisho.searchForPhrase(searchedTerm);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from the API" });
  }
}

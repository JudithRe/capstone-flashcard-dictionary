import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";

export default function WordList({ wordList }) {
  return (
    <>
      <Heading PageTitle="Your Saved Words" />
      <EntriesContainer wordList={wordList} />
    </>
  );
}

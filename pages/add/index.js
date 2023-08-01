import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";

export default function AddEntries({ handleAddEntry, wordList }) {
  return (
    <>
      <AddEntryForm handleAddEntry={handleAddEntry} />
      <h2>Your Current Word List</h2>
      <EntriesContainer wordList={wordList} />
    </>
  );
}

import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { StyledSection } from "@/components/StyledComponents/StyledSection";

export default function AddEntries({ handleAddEntry, wordList }) {
  return (
    <>
      <Heading id="add-form-title" PageTitle="Add your Words" />
      <AddEntryForm handleAddEntry={handleAddEntry} />
      <StyledSection>
        <h2>Your Current Word List</h2>
        <EntriesContainer wordList={wordList} />
      </StyledSection>
    </>
  );
}

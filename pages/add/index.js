import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import { useEffect } from "react";

export default function AddEntries({
  handleAddEntry,
  wordList,
  setActivePage,
}) {
  useEffect(() => {
    setActivePage("add");
  }, [setActivePage]);

  return (
    <MainContent>
      <Heading id="add-form-title" PageTitle="Add your Words" />
      <AddEntryForm handleAddEntry={handleAddEntry} />
      <StyledSection>
        <h2>Your Current Word List</h2>
        <EntriesContainer wordList={wordList} />
      </StyledSection>
    </MainContent>
  );
}

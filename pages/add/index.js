import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import { useEffect } from "react";
import { hasToken } from "@/utils/checkUser";

export async function getServerSideProps(context) {
  const token = await hasToken(context.req);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function AddEntries({
  handleAddEntry,
  wordList,
  handleActivePage,
}) {
  useEffect(() => {
    handleActivePage("add");
  }, [handleActivePage]);

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

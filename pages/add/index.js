import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import { useEffect } from "react";
import { hasToken } from "@/utils/checkUser";
import { useSession } from "next-auth/react";

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
  activeUser,
  handleActiveUser,
}) {
  const { data: session } = useSession();

  useEffect(() => {
    handleActivePage("add");
    handleActiveUser(session?.user._id);
  }, [handleActivePage, handleActiveUser, session]);

  return (
    <MainContent>
      <Heading id="add-form-title" PageTitle="Add your Words" />
      <AddEntryForm handleAddEntry={handleAddEntry} activeUser={activeUser} />
      <StyledSection>
        <h2>Your Current Word List</h2>
        <EntriesContainer wordList={wordList} />
      </StyledSection>
    </MainContent>
  );
}

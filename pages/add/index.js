import AddEntryForm from "@/components/AddEntryForm";
import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
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
  newEntries,
  activeUser,
  categoryData,
  handleAddCategory,
}) {
  return (
    <MainContent>
      <Heading id="add-form-title" PageTitle="Add your Words" />
      <AddEntryForm
        handleAddEntry={handleAddEntry}
        activeUser={activeUser}
        categoryData={categoryData}
        handleAddCategory={handleAddCategory}
        newEntries={newEntries}
      />
      {newEntries.length > 0 && (
        <StyledSection>
          <h2>Recently Added Words</h2>
          <EntriesContainer wordList={newEntries} />
        </StyledSection>
      )}
    </MainContent>
  );
}

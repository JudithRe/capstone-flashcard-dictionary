import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";

export default function WordList({ wordList, databaseIsLoading }) {
  return (
    <MainContent>
      <Heading PageTitle="Your Saved Words" />
      <EntriesContainer
        wordList={wordList}
        databaseIsLoading={databaseIsLoading}
      />
    </MainContent>
  );
}

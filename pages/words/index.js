import EntriesContainer from "@/components/EntriesContainer";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSectionRightAlign } from "@/components/StyledComponents/StyledSection";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import { useEffect, useState } from "react";
import EditIcon from "@/assets/icons/EditIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";
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

export default function WordList({
  wordList,
  databaseIsLoading,
  databaseMutate,
  handleDetailEditMode,
  handleActivePage,
  handleActiveUser,
}) {
  const { data: session } = useSession();

  useEffect(() => {
    handleActivePage("word-list");
    handleActiveUser(session?.user._id);
  }, [handleActivePage, handleActiveUser, session]);

  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      {wordList && <Heading PageTitle={`${wordList.length} Saved Words`} />}
      <MainContent>
        <StyledSectionRightAlign>
          <StyledSecondaryButton
            type="button"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            {!isEditMode ? (
              <span
                className="inherit-background-color"
                role="img"
                aria-label="edit"
              >
                <EditIcon height="20px" width="20px" />
              </span>
            ) : (
              <span
                className="inherit-background-color"
                role="img"
                aria-label="done editing"
              >
                <CorrectIcon height="16px" width="16px" />
              </span>
            )}
          </StyledSecondaryButton>
        </StyledSectionRightAlign>
        <EntriesContainer
          isEditMode={isEditMode}
          handleDetailEditMode={handleDetailEditMode}
          wordList={wordList}
          databaseIsLoading={databaseIsLoading}
          databaseMutate={databaseMutate}
        />
      </MainContent>
    </>
  );
}

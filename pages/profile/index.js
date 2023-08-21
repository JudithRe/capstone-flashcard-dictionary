import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledGhostButton } from "@/components/StyledComponents/StyledButtons";

import { hasToken } from "@/utils/checkUser";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

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

export default function ProfilePage({ wordList, databaseMutate }) {
  const { data: session } = useSession();
  return (
    <MainContent>
      <Heading PageTitle="Profile" />
      <SignOutDiv>
        Signed in as {session?.user?.username}
        <StyledGhostButton onClick={() => signOut()}>
          Sign Out
        </StyledGhostButton>
      </SignOutDiv>
    </MainContent>
  );
}

const SignOutDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

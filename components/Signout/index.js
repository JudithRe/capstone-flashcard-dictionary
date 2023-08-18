import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import { StyledGhostButton } from "../StyledComponents/StyledButtons";

export default function Signout() {
  const { data: session } = useSession();

  if (session?.user?.username) {
    return (
      <>
        <StyledFixedSection>
          <StyledGreeting className="transparent-background-color">
            {session?.user?.username}さん、 こんにちは。
          </StyledGreeting>
          <StyledSignOutButton onClick={() => signOut()}>
            Sign Out
          </StyledSignOutButton>
        </StyledFixedSection>
      </>
    );
  }
}
const StyledGreeting = styled.p`
  font-size: 1.3rem;
  font-weight: 900;
`;

const StyledSignOutButton = styled(StyledGhostButton)`
  position: fixed;
  top: 10px;
  left: 10px;
`;

const StyledFixedSection = styled.div`
  position: fixed;
  background-color: transparent;
  left: 2rem;
  width: 40%;
  top: 3rem;
  z-index: 15;
`;

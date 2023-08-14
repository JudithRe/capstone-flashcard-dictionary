import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import { StyledSettingsButton } from "../StyledComponents/StyledButtons";

export default function Signout() {
  const { data: session } = useSession();

  if (session?.user?.username) {
    return (
      <>
        <StyledFixedSection>
          <span>Hello {session?.user?.username} </span>
          <StyledSettingsButton onClick={() => signOut()}>
            Sign Out
          </StyledSettingsButton>
        </StyledFixedSection>
        <StyledCircle />
      </>
    );
  }
}

const StyledCircle = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 0;
  transform: translate(50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);

  @media ${device.tablet} {
    width: 500px;
    height: 500px;
  }
`;

const StyledFixedSection = styled.div`
  position: fixed;
  background-color: transparent;
  right: 0;
  top: 0;
  z-index: 15;
`;
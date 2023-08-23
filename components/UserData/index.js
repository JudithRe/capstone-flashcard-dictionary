import ProfileIcon from "@/assets/icons/ProfileIcon";
import styled from "styled-components";
import { StyledSection } from "../StyledComponents/StyledSection";
import { signOut, useSession } from "next-auth/react";
import {
  StyledGhostButton,
  StyledSecondaryButton,
} from "../StyledComponents/StyledButtons";

export default function UserData() {
  const { data: session } = useSession();

  return (
    <StyledSection>
      <StyledProfilePicturePlaceholder>
        <ProfileIcon height="80px" width="80px" color={`var(--dark-main)`} />
      </StyledProfilePicturePlaceholder>

      <StyledUserInfo>
        <StyledParagraphNoMargins>
          <span style={{ fontSize: 1 + "rem" }}>You're signed in as</span>
        </StyledParagraphNoMargins>
        <StyledParagraphNoMargins style={{ marginBottom: 0.5 + "rem" }}>
          {session?.user?.username}
        </StyledParagraphNoMargins>
        <StyledGhostButton onClick={() => signOut()}>
          Sign Out
        </StyledGhostButton>
      </StyledUserInfo>
    </StyledSection>
  );
}

const StyledProfilePicturePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  border: 4px solid var(--dark-main);
`;

const StyledUserInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StyledParagraphNoMargins = styled.p`
  margin: 0;
`;

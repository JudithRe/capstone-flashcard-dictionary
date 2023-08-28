// Styles Imports
import ProfileIcon from "@/assets/icons/ProfileIcon";
import styled from "styled-components";
import { StyledSection } from "../StyledComponents/StyledSection";
import { StyledGhostButton } from "../StyledComponents/StyledButtons";

// Functions and Dependencies Imports
import { signOut, useSession } from "next-auth/react";

export default function UserData() {
  const { data: session } = useSession();

  return (
    <StyledSection>
      <StyledProfilePicturePlaceholder>
        <ProfileIcon height="80px" width="80px" color={`var(--dark-main)`} />
      </StyledProfilePicturePlaceholder>

      <StyledUserInfo>
        <StyledParagraphNoMargins>
          <SmallerInlineFont>You&apos;re signed in as</SmallerInlineFont>
        </StyledParagraphNoMargins>
        <StyledParagraphNoMargins $needsMarginBottom={true}>
          {session?.user?.username}
        </StyledParagraphNoMargins>
        <StyledGhostButton onClick={() => signOut()}>
          Sign Out
        </StyledGhostButton>
      </StyledUserInfo>
    </StyledSection>
  );
}

// Styles

const SmallerInlineFont = styled.span`
  font-size: 1rem;
`;

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

export const StyledParagraphNoMargins = styled.p`
  margin: 0;
  text-align: ${(props) => (props.$isCentered ? "center" : "left")};
  margin-bottom: ${(props) => (props.$needsMarginBottom ? "0.5rem" : "0")};
`;

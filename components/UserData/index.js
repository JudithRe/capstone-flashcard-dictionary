// Styles Imports
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { StyledSection } from "../StyledComponents/StyledSection";
import { StyledGhostButton } from "../StyledComponents/StyledButtons";
import {
  SmallerInlineFont,
  StyledParagraphNoMargins,
  StyledProfilePicturePlaceholder,
  StyledUserInfo,
} from "./styled.UserData";

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

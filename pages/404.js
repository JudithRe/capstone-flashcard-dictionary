// Style Imports
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import { StyledBackButton } from "@/components/StyledComponents/StyledButtons";
import WorriedIcon from "@/assets/icons/WorriedIcon";
import { StyledParagraphNoMargins } from "@/components/UserData";
import { Spacer } from "@/components/StyledComponents/MainContent";

// Component Imports
import Heading from "@/components/PageHeading";

export default function Page404() {
  return (
    <>
      <Heading>404</Heading>
      <FixedCenteredPosition>
        <WorriedIcon color="var(--dark-main)" width="150" height="150" /> <br />
        <StyledParagraphNoMargins $isCentered={true}>
          This Page does not seem to exist.
        </StyledParagraphNoMargins>
        <Spacer />
        <Spacer />
        <StyledBackButton $isCentered={true} href="/">
          Go Back
        </StyledBackButton>
      </FixedCenteredPosition>
    </>
  );
}

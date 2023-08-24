import JG from "@/assets/icons/JG";
import styled from "styled-components";
import { NoStyleLink } from "../StudyDisplay";
import { useRouter } from "next/router";

function Logo({ width, height, color }) {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return (
      <StyledLogo>
        <span
          className="transparent-background-color"
          role="h1"
          aria-label="Jisho Genius"
        >
          <JG width="150px" />
        </span>
      </StyledLogo>
    );
  }
  return (
    <NoStyleLink href="/">
      <StyledLogo>
        <span
          className="transparent-background-color"
          role="h1"
          aria-label="Jisho Genius"
        >
          <JG height={height} width={width} color={color} />
        </span>
      </StyledLogo>
    </NoStyleLink>
  );
}

const StyledLogo = styled.div`
  position: fixed;
  right: 50%;
  top: -5px;
  transform: translate(50%);
`;

export default Logo;

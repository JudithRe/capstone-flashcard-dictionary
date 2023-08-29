// Styles Imports
import JG from "@/assets/icons/JG";
import styled from "styled-components";
import { NoStyleLink } from "../StyledComponents/Links";

// Components Imports
import { Spacer } from "../StyledComponents/MainContent";

// Functions and Dependencies Imports
import { useRouter } from "next/router";

function Logo({ width, height, color }) {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return (
      <StyledLogo>
        <Spacer />
        <Spacer />
        <span role="h1" aria-label="Jisho Genius">
          <JG width="170px" />
        </span>
      </StyledLogo>
    );
  }
  return (
    <>
      <RedDiv />
      <NoStyleLink href="/">
        <StyledLogo>
          <span role="h1" aria-label="Jisho Genius">
            <JG height={height} width={width} color={color} />
          </span>
        </StyledLogo>
      </NoStyleLink>
    </>
  );
}

// Styles

const RedDiv = styled.div`
  position: fixed;
  top: 0;
  right: 50%;
  transform: translate(50%);
  z-index: 5;
  height: 45px;
  width: 150px;
  background-color: var(--highlight-red);
`;

const StyledLogo = styled.div`
  background-color: transparent;
  position: fixed;
  right: 50%;
  top: -5px;
  transform: translate(50%);
  z-index: 6;
`;

export default Logo;

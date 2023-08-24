import JG from "@/assets/icons/JG";
import styled from "styled-components";
import { NoStyleLink } from "../StudyDisplay";
import { useRouter } from "next/router";
import { device } from "@/utils/globalValues";
import { Spacer } from "../StyledComponents/MainContent";

function Logo({ width, height, color }) {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return (
      <StyledLogo>
        <Spacer />
        <Spacer />
        <span
          className="transparent-background-color"
          role="h1"
          aria-label="Jisho Genius"
        >
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

const RedDiv = styled.div`
  position: fixed;
  top: 0;
  right: 50%;
  transform: translate(50%);
  z-index: 5;
  height: 30px;
  width: 100px;
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

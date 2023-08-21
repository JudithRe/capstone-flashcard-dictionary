import JG from "@/assets/icons/JG";

import styled from "styled-components";
import { NoStyleLink } from "../StudyDisplay";

function Logo({ width, height, color }) {
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
  right: 0;
  top: 1rem;
  transform: translate(-50%);
  z-index: 5;
`;

export default Logo;

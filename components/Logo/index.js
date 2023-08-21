import JG from "@/assets/icons/JG";
import { indie } from "@/styles";
import { device } from "@/utils/globalValues";
import { useRouter } from "next/router";
import styled from "styled-components";
import { NoStyleLink } from "../StudyDisplay";

function Logo({ width, height, color }) {
  const router = useRouter();
  const activePath = router.pathname;

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

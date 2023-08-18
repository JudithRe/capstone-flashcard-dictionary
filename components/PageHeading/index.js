import { useRouter } from "next/router";
import styled from "styled-components";

function Heading({ PageTitle }) {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/") {
    return <StyledPageHeadingRight>{PageTitle}</StyledPageHeadingRight>;
  }
  return <StyledPageHeadingCenter>{PageTitle}</StyledPageHeadingCenter>;
}

const StyledPageHeadingCenter = styled.h1`
  position: absolute;
  left: 50%;
  top: 0.2rem;
  transform: translate(-50%);
  background-color: transparent;
  color: var(--dark-mode-text-color);
  font-size: 2rem;
  padding: 0.3rem 1rem;
  text-align: center;
  z-index: 5;
`;

const StyledPageHeadingRight = styled(StyledPageHeadingCenter)`
  transform: none;
  right: 0;
`;

export default Heading;

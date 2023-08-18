import { device } from "@/utils/globalValues";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function HeaderBackground() {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/") {
    return <StyledCircleRight />;
  }
  return <StyledCircle />;
}

const StyledCircle = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 0;
  transform: translate(50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--highlight-red);
  background: radial-gradient(circle, var(--highlight-red) 40%, #93231c 80%);
  color: var(--dark-mode-text-color);
  box-shadow: var(--default-box-shadow);

  @media ${device.tablet} {
    width: 400px;
    height: 400px;
  }
`;

const StyledCircleRight = styled(StyledCircle)`
  transform: none;
  width: 200px;
  height: 200px;
  right: 0;
  border-radius: 0 0 0 300px;
  background: radial-gradient(circle, var(--highlight-red) 30%, #93231c 90%);
  background-color: rgba(196, 196, 196, 1);
`;

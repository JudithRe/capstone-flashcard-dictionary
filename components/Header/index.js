import { device } from "@/utils/globalValues";
import styled from "styled-components";
import Logo from "../Logo";

export default function Header() {
  return (
    <>
      <StyledCircleCenter />
      <Logo width="100px" />
    </>
  );
}

const StyledCircle = styled.div`
  position: fixed;
  z-index: 2;

  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);

  @media ${device.tablet} {
    width: 400px;
    height: 400px;
  }
`;

const StyledCircleCenter = styled(StyledCircle)`
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
`;
const StyledCircleLeft = styled(StyledCircle)`
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;

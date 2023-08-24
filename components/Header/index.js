import { device } from "@/utils/globalValues";
import styled from "styled-components";
import Logo from "../Logo";

export default function Header() {
  return (
    <StyledHeaderPosition>
      <StyledCircle />
      <Logo width="100px" />
    </StyledHeaderPosition>
  );
}
const StyledHeaderPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -5rem;

  margin-bottom: -100px;
  z-index: 2;
  @media ${device.tablet} {
    margin-bottom: -100px;
    top: -8rem;
  }
`;

export const StyledCircle = styled.div`
  transform: translate(0%, -50%);
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

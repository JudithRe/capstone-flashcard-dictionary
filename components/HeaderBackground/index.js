import { device } from "@/utils/globalValues";
import styled from "styled-components";

export default function HeaderBackground() {
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

  @media ${device.tablet} {
    width: 500px;
    height: 500px;
  }
`;

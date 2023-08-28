import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const StyledHeaderPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -5rem;
  backdrop-filter: blur(1px);
  height: 150px;
  z-index: 2;

  @media ${device.tablet} {
    height: 200px;
    top: -8rem;
  }
`;

export const StyledCircle = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 0 0 50% 50%/0 0 100% 100%;
  background-color: var(--highlight-red);
  color: var(--dark-mode-text-color);

  @media ${device.tablet} {
    width: 400px;
    height: 400px;
  }
`;

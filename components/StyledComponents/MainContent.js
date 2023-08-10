import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-bottom: var(--footer-height);
  z-index: 2;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: 100px;
  }
`;

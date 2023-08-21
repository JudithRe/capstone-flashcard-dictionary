import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const IndexMainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 1.5rem;
  margin-bottom: var(--footer-height);
  margin-top: 250px;
  z-index: 2;
  width: 100vw;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: 300px;
  }
`;

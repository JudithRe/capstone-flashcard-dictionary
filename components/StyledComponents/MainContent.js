import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  gap: 1.5rem;
  margin: 0 0 var(--footer-height) 0;

  z-index: 2;
  width: 100vw;

  @media ${device.tablet} {
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: 0.5rem;
`;

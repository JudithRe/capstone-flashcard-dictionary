import { device } from "@/utils/globalValues";
import { styled } from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: var(--footer-height);

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: var(--footer-height);
  }
`;

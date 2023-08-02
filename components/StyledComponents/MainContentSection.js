import { device } from "@/utils/globalValues";
import { styled } from "styled-components";

export const MainContent = styled.div`
  margin-bottom: var(--footer-height);

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-top: var(--footer-height);
  }
`;

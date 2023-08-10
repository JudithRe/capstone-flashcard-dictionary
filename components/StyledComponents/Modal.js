import { device } from "@/utils/globalValues";
import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  top: 0;
  background-color: var(--overlay);
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;

import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  top: 0;
  background-color: var(--overlay);
  width: 100vw;
  height: 100vh;
  z-index: 6;
`;

export const FixedCenteredPosition = styled.div`
  position: absolute;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
  z-index: 5;
`;

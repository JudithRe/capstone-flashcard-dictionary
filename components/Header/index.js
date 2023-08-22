import { device } from "@/utils/globalValues";
import { useRouter } from "next/router";

import styled from "styled-components";

export default function Header() {
  const router = useRouter();
  const activePath = router.pathname;

  // if (activePath === "/") {
  //   return (
  //     <HeaderBackground>
  //       <StyledCircleLeft />
  //     </HeaderBackground>
  //   );
  // }

  return <StyledCircleCenter />;
}

const StyledCircle = styled.div`
  position: fixed;
  z-index: 0;

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

const StyledCircleCenter = styled(StyledCircle)`
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
`;
const StyledCircleLeft = styled(StyledCircle)`
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;

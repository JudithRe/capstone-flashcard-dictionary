import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Greeting() {
  const { data: session } = useSession();

  if (session?.user?.username) {
    return (
      <>
        <StyledFixedSection>
          <StyledGreetingVertical className="transparent-background-color">
            こんにちは。
          </StyledGreetingVertical>
        </StyledFixedSection>
      </>
    );
  }
}

const StyledGreetingVertical = styled.p`
  position: fixed;
  top: 3rem;
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 7px;
  padding: 10px 0;
  left: 50%;
  transform: translate(-100%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  max-height: 15rem;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const StyledFixedSection = styled.div`
  position: fixed;
  background-color: transparent;
  left: 2rem;
  width: 40%;
  top: 3rem;
  z-index: 15;
`;

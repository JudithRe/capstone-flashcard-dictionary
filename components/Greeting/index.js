import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Greeting() {
  const { data: session } = useSession();

  if (session?.user?.username) {
    return (
      <StyledFixedSection>
        <StyledGreeting className="greeting">
          <StyledUsername>{session?.user?.username}</StyledUsername>
          さん、
          <br />
          こんにちは。
        </StyledGreeting>
      </StyledFixedSection>
    );
  }
}

const StyledUsername = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--dark-mode-text-color);
  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

const StyledGreeting = styled.p`
  max-width: 300px;
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--dark-mode-text-color);
  @media ${device.tablet} {
    max-width: 400px;
    font-size: 1.6rem;
  }
`;

const StyledFixedSection = styled.div`
  position: fixed;
  background-color: transparent;
  display: flex;
  right: 50%;
  transform: translate(50%);

  top: 2.5rem;
  z-index: 5;
`;

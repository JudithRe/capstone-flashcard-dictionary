import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
export default function HeaderBackground() {
  const { data: session } = useSession();

  return (
    <>
      <StyledCircle />

      <p>Hello {session?.user?.email || "Unknown"}</p>
      <Link href="/signin">
        <button onClick={() => signIn()}>Sign In</button>
      </Link>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}

const StyledCircle = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 0;
  transform: translate(50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--highlight-red);
  color: var(--white);

  @media ${device.tablet} {
    width: 500px;
    height: 500px;
  }
`;

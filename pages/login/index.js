import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthForm from "@/components/AuthForm";
import styled from "styled-components";
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import Heading from "@/components/PageHeading";
import JG from "@/assets/icons/JG";

function AuthPage({ handleActivePage }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    handleActivePage("login");
  }, [handleActivePage]);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Heading
        PageTitle={
          <span
            className="transparent-background-color"
            role="h1"
            aria-label="Jisho Genius"
          >
            <JG />
          </span>
        }
      />
      <FixedCenteredPosition>
        <AuthForm />
      </FixedCenteredPosition>
    </>
  );
}

export default AuthPage;

const StyledDIV = styled.div`
  position: fixed;
  background-color: transparent;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 1;
`;

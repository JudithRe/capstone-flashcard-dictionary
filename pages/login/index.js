import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthForm from "@/components/AuthForm";
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import Heading from "@/components/PageHeading";
import JG from "@/assets/icons/JG";
import { StyledResultDisplay } from "@/components/SearchResults";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
    return (
      <FixedCenteredPosition>
        <StyledResultDisplay>Loading...</StyledResultDisplay>
      </FixedCenteredPosition>
    );
  }

  return (
    <FixedCenteredPosition>
      <AuthForm />
    </FixedCenteredPosition>
  );
}

export default AuthPage;

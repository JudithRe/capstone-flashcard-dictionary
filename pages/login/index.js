// Style Imports
import { FixedCenteredPosition } from "@/components/StyledComponents/Modal";
import { StyledResultDisplay } from "@/components/SearchResults/styled.SearchResults";

// Component Imports
import AuthForm from "@/components/AuthForm";

// Function and Dependency Imports
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

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

import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import AuthenticationForm from "@/components/AuthenticationForm";

function SignInPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // check if logged in and redirect to home page if so
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
      <h1>USER LOgin Test</h1>

      <AuthenticationForm />
    </>
  );
}

export default SignInPage;

import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { MainContent } from "../StyledComponents/MainContent";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function AuthenticationForm() {
  const [registered, setRegistered] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Maybe later: Add validation here

    if (isLogin) {
      await signIn("credentials", {
        redirect: "/",
        email: enteredEmail,
        password: enteredPassword,
      });
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        setRegistered(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <MainContent>
      {!registered ? (
        <>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div>
              <button>{isLogin ? "Login" : "Create Account"}</button>
              <button type="button" onClick={switchAuthModeHandler}>
                {isLogin ? "No Account? Create One" : "Already a user? Login"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <div>
          <p>You have successfully registered!</p>

          <button onClick={() => router.reload()}>Login Now</button>
        </div>
      )}
    </MainContent>
  );
}

export default AuthenticationForm;

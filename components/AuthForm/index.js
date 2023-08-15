import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledForm, StyledFormInput, StyledFormLabel } from "../AddEntryForm";
import {
  StyledSettingsButton,
  StyledSubmitButton,
} from "../StyledComponents/StyledButtons";
import styled from "styled-components";
import ErrorIcon from "@/assets/icons/ErrorIcon";

function AuthForm() {
  const [registered, setRegistered] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [loginError, setLoginError] = useState({
    hasError: false,
    errorMessage: "",
  });

  const [loginProcess, setLoginProcess] = useState(true);
  const router = useRouter();

  async function createUser(username, password) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password, role: "user" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.message.includes("already taken")) {
      setLoginError({ hasError: true, errorMessage: data.message });
    }
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  }

  function switchAuthModeHandler() {
    setLoginProcess((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (loginProcess) {
      const loginAttempt = await signIn("credentials", {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });

      if (loginAttempt.ok) {
        router.replace("/");
      }
      if (!loginAttempt.ok) {
        setLoginError({ hasError: true, errorMessage: loginAttempt.error });
      }
    } else {
      try {
        await createUser(enteredUsername, enteredPassword);
        setRegistered(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <StyledCard>
      {!registered ? (
        <>
          <h2 className="inherit-background-color">
            {loginProcess ? "Login" : "Sign Up"}
          </h2>
          <StyledForm onSubmit={submitHandler}>
            <StyledFormLabel htmlFor="username">Username</StyledFormLabel>
            <StyledFormInput
              type="username"
              id="username"
              required
              ref={usernameInputRef}
            />

            {loginError.hasError && (
              <StyledErrorMessage>
                <span
                  className="inherit-background-color"
                  role="img"
                  aria-label="error"
                >
                  <ErrorIcon height="18px" width="18px" />
                </span>
                {loginError.errorMessage}
              </StyledErrorMessage>
            )}
            <StyledFormLabel htmlFor="password">Password</StyledFormLabel>
            <StyledFormInput
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />

            <StyledSubmitButton>
              {loginProcess ? "Log in" : "Create Account"}
            </StyledSubmitButton>

            <p className="inherit-background-color">
              {loginProcess ? "No Account yet?" : "Already a user?"}
            </p>

            <StyledSettingsButton type="button" onClick={switchAuthModeHandler}>
              {loginProcess ? "Create Account" : "Log in"}
            </StyledSettingsButton>
          </StyledForm>
        </>
      ) : (
        <>
          <p className="inherit-background-color">
            You have successfully registered!
          </p>

          <StyledSettingsButton
            onClick={() => router.reload()}
            className="button button-color"
          >
            Login Now
          </StyledSettingsButton>
        </>
      )}
    </StyledCard>
  );
}

const StyledErrorMessage = styled.p`
  background-color: inherit;
  border: 1px solid var(--highlight-red);
  padding: 5px;
  border-radius: 5px;

  &::before {
    background-color: inherit;
  }
`;

export default AuthForm;

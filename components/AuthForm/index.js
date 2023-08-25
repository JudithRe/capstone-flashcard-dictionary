// Styles Imports
import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledForm, StyledFormInput, StyledFormLabel } from "../AddEntryForm";
import { StyledSettingsButton } from "../StyledComponents/StyledButtons";
import styled from "styled-components";
import ErrorIcon from "@/assets/icons/ErrorIcon";
import { StyledSubmitButtonRight, StyledWarningText } from "../EditingForm";

// Functions and Dependencies Imports
import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

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
      body: JSON.stringify({ username, password, role: "user", streak: 0 }),
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
        const errorMessage = loginAttempt.error;
        if (
          errorMessage.includes("Password") ||
          errorMessage.includes("This username is already") ||
          errorMessage.includes("user with a matching username")
        ) {
          setLoginError({ hasError: true, errorMessage: loginAttempt.error });
          return;
        }

        setLoginError({
          hasError: true,
          errorMessage: "Still loading. Please wait a minute and try again.",
        });
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
          <h2>{loginProcess ? "Login" : "Sign Up"}</h2>
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
                <span role="img" aria-label="error">
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

            <StyledSubmitButtonRight>
              {loginProcess ? "Log in" : "Create Account"}
            </StyledSubmitButtonRight>

            <StyledLoginText className="inherit-background-color">
              {loginProcess ? "No Account yet?" : "Already a user?"}
            </StyledLoginText>

            <StyledSettingsButtonLeft
              type="button"
              onClick={switchAuthModeHandler}
            >
              {loginProcess ? "Create Account" : "Log in"}
            </StyledSettingsButtonLeft>
          </StyledForm>
        </>
      ) : (
        <>
          <p>You have successfully registered!</p>

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

// Styles

const StyledLoginText = styled(StyledWarningText)`
  margin-bottom: 3rem;
`;
const StyledErrorMessage = styled.p`
  background-color: inherit;
  border: 1px solid var(--highlight-red);
  padding: 5px;
  border-radius: 5px;
`;

const StyledSettingsButtonLeft = styled(StyledSettingsButton)`
  position: absolute;
  bottom: 1rem;
  left: 0;
  border-radius: 0 25px 25px 0;
`;

export default AuthForm;

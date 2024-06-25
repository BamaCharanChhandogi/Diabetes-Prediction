import React, { useState } from "react";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 1;
  ${({ signIn }) => (!signIn ? 'transform: translateX(100%);' : null)}
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const ForgotPasswordLink = styled(Link)`
  color: blue;
  text-decoration: none;
  margin: 15px 0;
  font-size: 14px;
`;

const PasswordToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const GoogleButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const SignInButton = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.8em 2.5em;
  font-size: 0.9em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const Login = ({ signIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setPasswordError("Please enter both email and password.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPasswordError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    console.log("Logging in with:", email, password);
    setPasswordError("");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: (error) => console.error(error),
  });

  return (
    <Container signIn={signIn}>
      <Form>
        <Title>Sign in</Title>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <PasswordToggleIcon onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </PasswordToggleIcon>
        </InputWrapper>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <SignInButton type="submit">Sign In</SignInButton>
        <ForgotPasswordLink to="/forgot-password">
          Forgot your password?
        </ForgotPasswordLink>
        <GoogleButton onClick={googleLogin}>
          <GoogleLogo
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
          />
          Sign In with Google
        </GoogleButton>
      </Form>
    </Container>
  );
};

export default Login;

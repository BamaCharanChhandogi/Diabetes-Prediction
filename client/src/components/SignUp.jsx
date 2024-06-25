import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 100%; /* Full width by default */
  opacity: 0;
  z-index: 10;
  ${props =>
    !props.signIn &&
    `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `}

  @media (min-width: 768px) {
    width: 50%; /* Adjust width on larger screens */
  }
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5em;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 0.8em;
  margin: 0.5em 0;
  width: 100%;
  max-width: 400px; 
`;

const PasswordToggleIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
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
  margin-top: 1.5em;

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;
`;

const SignUp = ({ signIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  const handlePasswordChange = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSignUp = e => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setPasswordError("Please enter all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPasswordError("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    alert("Account created successfully!"); // Alert message on successful registration
    console.log("Signing up with:", name, email, password);
    setPasswordError("");
  };

  return (
    <Container signIn={signIn}>
      <Form>
        <Title>Create Account</Title>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <PasswordToggleIcon onClick={togglePasswordVisibility}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </PasswordToggleIcon>
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <PasswordToggleIcon onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </PasswordToggleIcon>
        </InputWrapper>
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <Button onClick={handleSignUp}>REGISTER</Button>
      </Form>
    </Container>
  );
};

export default SignUp;

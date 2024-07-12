import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import styled from "styled-components";

const SignUpButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #1a365d;
  border: none;
  border-radius: 5px;
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

function SignUp() {
  const [email, setEmail] = useState("");
  const [passVis, setPassVis] = useState(false);
  const [conVis, setConVis] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      // Handle form submission
    }
  };

  return (
    <section className="bg-gray-900 py-8 min-h-screen signup">
      <div className="flex flex-col items-center max-w-[36rem] justify-center px-8 py-10 mx-auto mt-10 lg:py-12">
        <div className="w-full bg-white rounded-lg shadow-lg">
          <div className="p-8 space-y-6 md:space-y-8 sm:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
              BEGIN YOUR JOURNEY!
            </h1>
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type={passVis ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  required
                />
                <span
                  onClick={() => setPassVis(!passVis)}
                  className="absolute right-4 top-10 text-gray-400 hover:cursor-pointer"
                >
                  {passVis ? <IoEyeOff className="h-5 w-5" /> : <IoEye className="h-5 w-5" />}
                </span>
              </div>
              <div className="relative">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type={conVis ? "text" : "password"}
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  required
                />
                <span
                  onClick={() => setConVis(!conVis)}
                  className="absolute right-4 top-10 text-gray-400 hover:cursor-pointer"
                >
                  {conVis ? <IoEyeOff className="h-5 w-5" /> : <IoEye className="h-5 w-5" />}
                </span>
              </div>
              {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}
              <div className="flex items-start">
                <SignUpButton type="submit">REGISTER NOW</SignUpButton>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;

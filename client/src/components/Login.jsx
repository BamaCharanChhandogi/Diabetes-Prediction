import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithGoogle } from './firebaseConfig'; // Import the sign-in function

// CSS Styles for Google Logo
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
  width: 100%;
  text-align: center;
  padding: 10px 0;
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

function Login() {
  const [passVis, setPassVis] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <>
      <section className="bg-gray-900 py-8 min-h-screen login">
        <div className="flex flex-col items-center max-w-[36rem] justify-center px-8 py-10 mx-auto mt-10 lg:py-12">
          <div className="w-full bg-white rounded-lg shadow-lg">
            <div className="p-8 space-y-6 md:space-y-8 sm:p-10">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                WELCOME BACK!
              </h1>
              <form className="space-y-6 md:space-y-8" action="#">
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                    minLength={8}
                    required
                  />
                  <span
                    onClick={() => setPassVis(!passVis)}
                    className="absolute right-4 top-10 text-gray-400 cursor-pointer"
                  >
                    {passVis ? <IoEyeOff className="h-5 w-5" /> : <IoEye className="h-5 w-5" />}
                  </span>
                </div>
                <SignInButton type="submit">
                  SIGN IN 
                </SignInButton>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline mt-2"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Google Sign In Button */}
                <GoogleButton onClick={handleGoogleLogin}>
                  <GoogleLogo
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google Logo"
                  />
                  Sign In with Google
                </GoogleButton>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <button
                    onClick={() => navigate('/sign-up')}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

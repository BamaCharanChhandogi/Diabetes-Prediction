import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Prediction from './components/Prediction';
import DataInfo from './components/DataInfo';
import Visualization from './components/Visualization';
import Footer from './components/Footer';
import ContactUs from './components/contact';
import FloatBtn from './components/FloatBtn';
import FAQ from './components/FAQ';
import Login from './components/Login'; 
import SignUp from './components/SignUp'; 

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 800px; /* Increased width */
  max-width: 100%;
  min-height: 500px; /* Increased min-height */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

const Overlay = styled.div`
  background: #007bff;
  background: -webkit-linear-gradient(to right, #007bff, #ff416c);
  background: linear-gradient(to right, #007bff, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 60px; /* Increased padding */
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const GhostButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: transparent;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

function AuthContainer() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Container>
      <SignUp signIn={signIn} />
      <Login signIn={signIn} />
      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
            <Title>WELCOME BACK!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => toggle(true)}>
              Sign In
            </GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signinIn={signIn}>
            <Title>GREETINGS!</Title>
            <Paragraph>
              Enter your personal details and start your journey with us
            </Paragraph>
            <GhostButton onClick={() => toggle(false)}>
              Sign Up
            </GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <GoogleOAuthProvider clientId="GOOGLE_OAUTH_CLIENT_ID">
      <Router>
        <AppWrapper>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data-info" element={<DataInfo />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/visualization" element={<Visualization />} />
                <Route path="/sign-up" element={<AuthContainer />} />
                <Route path="/login" element={<AuthContainer />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/FAQ" element={<FAQ />} />
              </Routes>
            </div>
            <Footer />
            <FloatBtn />
          </div>
        </AppWrapper>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

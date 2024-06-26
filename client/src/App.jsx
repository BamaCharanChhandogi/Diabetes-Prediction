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

const clientId = '170594993017-7vbd8nf21nslhfjrf85ladpqmtj7ca7f.apps.googleusercontent.com';  

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <AppWrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-info" element={<DataInfo />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
          <Footer />
          <FloatBtn />
        </AppWrapper>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Prediction from "./components/Prediction";
import DataInfo from "./components/DataInfo";
import Visualization from "./components/Visualization";
import Footer from "./components/Footer";
import ContactUs from "./components/contact";
import FloatBtn from "./components/FloatBtn";
import FAQ from "./components/FAQ";
import Helmet from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/308f960c-95e7-4cc1-aa6a-f1c653965b80/webchat/v2/config.js"></script>
      </Helmet>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data-info" element={<DataInfo />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/FAQ" element={<FAQ />} />
            </Routes>
          </div>
          <Footer />
          <FloatBtn />
        </div>
      </Router>
    </>
  );
};

export default App;

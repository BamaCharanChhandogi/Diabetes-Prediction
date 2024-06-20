import React from 'react';
import { Suspense } from 'react'; //Imported Suspense. It will be needed for lazy loading
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Navbar =  React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./components/Home')) ;
const Prediction =  React.lazy(() => import('./components/Prediction'));
const DataInfo = React.lazy(() => import('./components/DataInfo'));
const Visualization = React.lazy(() => import('./components/Visualization'));
const Footer = React.lazy(() => import('./components/Footer'));
const ContactUs = React.lazy(() => import('./components/contact'));
const FloatBtn = React.lazy(() => import( './components/FloatBtn'));
const FAQ = React.lazy(() => import('./components/FAQ'));
import LoadingSpinbar from './components/loadingSpinbar'; //The spinbar will render whenever loading content takes time
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<LoadingSpinbar/>}>
          <Navbar />
        </Suspense>
        <div className="flex-grow">
          <Routes>    {/* The loading spinbar will be visible to the user whenever the contents are loading*/ }
            <Route path="/" element={<Suspense fallback={<LoadingSpinbar />}><Home /></Suspense>} />    
            <Route path="/data-info" element={<Suspense fallback={<LoadingSpinbar/>}><DataInfo /></Suspense>} />
            <Route path="/prediction" element={<Suspense fallback={<LoadingSpinbar/>}><Prediction /></Suspense>} />
            <Route path="/visualization" element={<Suspense fallback={<LoadingSpinbar/>}><Visualization /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<LoadingSpinbar/>}><ContactUs /></Suspense>} />
            <Route path="/FAQ" element={<Suspense fallback={<LoadingSpinbar/>}><FAQ /></Suspense>} />
          </Routes>
        </div>
        <Suspense fallback={<LoadingSpinbar/>}>
          <Footer />
        </Suspense>
        <Suspense fallback={<LoadingSpinbar/>}>
          <FloatBtn />
        </Suspense>
        
      </div>
    </Router>
  );
};

export default App;

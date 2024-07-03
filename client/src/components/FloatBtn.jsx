'use client';

import React, { useState, useEffect } from "react";
import { animateScroll } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    animateScroll.scrollToTop({
      top: 0,
      behavior: "smooth",
      duration: 500
    });
  };

  const buttonStyles = {
    position: 'fixed',
    bottom: '95px',
    right: '40px',
    zIndex: 1000,
    backgroundColor: '#7E22CE',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    opacity: showButton ? 1 : 0,
    transition: 'opacity 0.1s ease',
    borderRadius: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px'
  };

  const iconStyles = {
    fontSize: '20px'
  };

  return (
    <>
      <style>{`
        .back-to-top:hover {
          background-color: #f3e8ff !important;
          color: #7E22CE !important;
        }
        .back-to-top:focus {
          outline: none;
        }
        .back-to-top:active {
          transform: translateY(2px);
        }
      `}</style>
      <button
        className="back-to-top"
        onClick={handleClick}
        style={buttonStyles}
      >
        <i className="fas fa-arrow-up" style={iconStyles}></i>
      </button>
    </>
  );
};

export default BackToTop;
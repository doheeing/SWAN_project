import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.style.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer-container">
      <button
        className="footer-button"
        onClick={() => handleNavigation("/sleep")}
      >
        수면
      </button>
      <button
        className="footer-button"
        onClick={() => handleNavigation("/journal")}
      >
        일지
      </button>
      <button
        className="footer-button"
        onClick={() => handleNavigation("/statistics")}
      >
        통계
      </button>
      <button
        className="footer-button"
        onClick={() => handleNavigation("/profile")}
      >
        프로필
      </button>
    </div>
  );
};

export default Footer;

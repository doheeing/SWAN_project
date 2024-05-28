import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.style.css";

const Header = () => {
  const location = useLocation();
  const isDarkMode =
    location.pathname.startsWith("/chatbot") ||
    location.pathname.startsWith("/score") ||
    location.pathname.startsWith("/commentPage") ||
    location.pathname.startsWith("/solution") ||
    location.pathname.startsWith("/agreement") ||
    location.pathname.startsWith("/solution-detail-loading") ||
    location.pathname.startsWith("/solution-detail");

  return (
    <header className={`header ${isDarkMode ? "dark" : ""}`}>
      <h1>SWAN</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;

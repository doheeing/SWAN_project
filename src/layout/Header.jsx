import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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
      <h1>
        <Link to="/">SWAN</Link>
      </h1>
      <nav>
        <Link to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

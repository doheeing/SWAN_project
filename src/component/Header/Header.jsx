import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const lightModePaths = [
    "/first",
    "/login",
    "/settings",
    "/profile",
    "/submit-data",
    "/data-analysis",
    "/data-analysis-2",
    "/data-analysis-3",
    "/work-schedule",
    "/sleep-mode",
    "/day-mode",
    "/evening-mode",
    "/night-mode",
  ];
  const isLightMode = lightModePaths.includes(location.pathname);

  return (
    <header className={`header ${isLightMode ? "light-mode" : "dark-mode"}`}>
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

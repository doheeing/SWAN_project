import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faChartLine,
  faChartBar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <nav className="bottom-nav-bar">
      <NavLink to="/sleep-coach" className="footer-item">
        <FontAwesomeIcon icon={faMoon} size="2x" />
        <p>수면 코치</p>
      </NavLink>
      <NavLink to="/sleep-content" className="footer-item">
        <FontAwesomeIcon icon={faChartLine} size="2x" />
        <p>수면 콘텐츠</p>
      </NavLink>
      <NavLink to="/profile" className="footer-item">
        <FontAwesomeIcon icon={faUser} size="2x" />
        <p>프로필</p>
      </NavLink>
      <NavLink to="/settings" className="footer-item">
        <FontAwesomeIcon icon={faChartBar} size="2x" />
        <p>설정</p>
      </NavLink>
    </nav>
  );
};

export default Footer;

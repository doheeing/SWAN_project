import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.style.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-section">
        SWAN
      </Link>
      <div>sleep wellness & assistance for nurses</div>
    </div>
  );
};

export default Header;

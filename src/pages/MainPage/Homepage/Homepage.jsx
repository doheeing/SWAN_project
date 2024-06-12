import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faChartLine,
  faChartBar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.style.css";

const Homepage = () => {
  const navigate = useNavigate();
  const gotoAuthenticate = () => {
    navigate("/login");
  };

  return (
    <div className="homepage">
      <div className="content">
        <h1>SWAN</h1>
        <h4>sleep wellness & assistance for nurses</h4>
        <h2>당신의 stable 한 삶을 위한<br></br> 맞춤 수면 솔루션</h2>
        <button className="main-button" onClick={gotoAuthenticate}>
          <div>수면 분석</div>
          <div>시작하기</div>
        </button>
      </div>

    </div>
  );
};

export default Homepage;

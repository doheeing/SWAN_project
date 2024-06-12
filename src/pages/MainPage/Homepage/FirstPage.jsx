import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faChartLine,
  faChartBar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.style.css";
import Footer from "../../../component/Footer/Footer";

const FirstPage = () => {
  const navigate = useNavigate();
  const gotoAuthenticate = () => {
    navigate("/chatbot");
  };
  const location = useLocation();
  const username = location.state?.username || "사용자";
  return (
    <div className="first-page">
      <div className="content">
        <h3>안녕하세요 {username}</h3>
        <h3>저는 당신의 수면코치 입니다.</h3>
        <button className="main-button" onClick={gotoAuthenticate}>
          <div>수면 진단</div>
          <div>시작하기</div>
        </button>
      </div>
      <Footer />{" "}
    </div>
  );
};

export default FirstPage;

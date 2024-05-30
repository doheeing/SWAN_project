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
        <h3>안녕하세요 {username}님</h3>
        <h3>저는 당신의 수면코치 입니다.</h3>
        <button className="main-button" onClick={gotoAuthenticate}>
          <div>수면 진단</div>
          <div>시작하기</div>
        </button>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-item">
          <FontAwesomeIcon icon={faMoon} size="2x" />
          <p>수면</p>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <p>일지</p>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon icon={faChartBar} size="2x" />
          <p>통계</p>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p>프로필</p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

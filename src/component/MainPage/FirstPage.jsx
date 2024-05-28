import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.style.css";

const FirstPage = () => {
  const navigate = useNavigate();
  const gotoAuthenticate = () => {
    navigate("/chatbot");
  };
  return (
    <div className="first-page">
      <h3>안녕하세요 이화양님</h3>
      <h3>저는 당신의 수면코치 입니다.</h3>
      <button onClick={gotoAuthenticate}>
        <div>수면 진단</div>
        <div>시작하기</div>
      </button>
    </div>
  );
};

export default FirstPage;

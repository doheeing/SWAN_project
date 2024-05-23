import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.style.css";

const Homepage = () => {
  const navigate = useNavigate();
  const gotoAuthenticate = () => {
    navigate("/login");
  };
  return (
    <div className="first-page">
      <button onClick={gotoAuthenticate}>
        <div>수면 분석</div>
        <div>시작하기</div>
      </button>
    </div>
  );
};

export default Homepage;

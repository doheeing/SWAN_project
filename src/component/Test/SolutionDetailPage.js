import React from "react";
import { useNavigate } from "react-router-dom";
import "./SolutionDetailPage.css";
import Footer from "../../layout/Footer";

const SolutionDetailPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/address");
  };

  return (
    <div className="solution-detail-container">
      <div className="solution-detail-content">
        <p>수면중 시각적인 부분에 대한 영향을 많이 받으시군요!</p>
        <p>딱 맞출 수면 키트를 제공해드릴게요!</p>
        <h2>개인 수면 키트</h2>
        <button className="kit-button" onClick={handleButtonClick}>
          수면 키트 받기
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default SolutionDetailPage;

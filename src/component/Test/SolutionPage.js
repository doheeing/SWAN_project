import React from "react";
import { useNavigate } from "react-router-dom";
import "./SolutionPage.style.css";

const SolutionPage = () => {
  const navigate = useNavigate();

  const gotoAgreementPage = () => {
    navigate("/agreement");
  };

  return (
    <div className="solution-container">
      <div className="solution-content">
        <h1>수면 솔루션</h1>
        <p>수면 개선을 위해 두 가지 솔루션을 제공해 드립니다</p>
        <div className="solution-page-area-plan">
          <h3>제공 솔루션 계획</h3>
          <h4>수면을 위한 이화양님 패키지 제공</h4>
          <div>
            수면안대, 스마트 조명, 1:1 상담 24시간 서비스, 3교대 근무표에 따른
            수면, 기상시간 자동 모드 변경
          </div>
        </div>
        <div className="solution-page-area-solutions">
          <button onClick={gotoAgreementPage}>
            <h2>‘낮에도 잘자요’ 서비스</h2>
            <p> 수면, 건강 기록을 연동하지 않음</p>
            <p> 주관적 수면 건강 평가만 제공</p>
          </button>
          <button onClick={gotoAgreementPage}>
            <h2>‘낮에 진짜 잘자요’ 서비스</h2>
            <p> 수면, 건강 정보 연계 (2주 실시)</p>
            <p> 통계분석을 통한 세부적 평가 및 수면</p>
            <p> 솔루션 추천</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;

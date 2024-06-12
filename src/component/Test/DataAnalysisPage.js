import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataAnalysisPage.css";

const DataAnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <div className="data-analysis-page">
      <h2>수면 데이터 분석 결과</h2>
      <div className="analysis-section">
        <h3>전체 일정</h3>
        <img
          src={`${process.env.PUBLIC_URL}/data1.png`}
          alt="수면 데이터 그래프"
          className="analysis-image"
        />
        <button onClick={() => navigate("/data-analysis-2")}>다음</button>
      </div>
    </div>
  );
};

export default DataAnalysisPage;

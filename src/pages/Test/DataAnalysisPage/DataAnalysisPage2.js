import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataAnalysisPage2.css";

const DataAnalysisPage2 = () => {
  const navigate = useNavigate();

  return (
    <div className="data-analysis-page">
      <h2>수면 데이터 분석 결과</h2>
      <div className="analysis-section">
        <img
          src={`${process.env.PUBLIC_URL}/data2.png`}
          alt="수면 데이터 그래프"
          className="analysis-image"
        />
        <button onClick={() => navigate("/data-analysis-3")}>다음</button>
      </div>
    </div>
  );
};

export default DataAnalysisPage2;

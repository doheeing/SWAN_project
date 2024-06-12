import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SubmitDataPage.css";

const SubmitDataPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/data-analysis");
    }, 3000);
  };

  return (
    <div className="submit-data-page">
      <h2>2주 데이터 제출</h2>
      <button onClick={handleSubmit}>2주 데이터 제출하기</button>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>분석중입니다...</p>
        </div>
      )}
    </div>
  );
};

export default SubmitDataPage;

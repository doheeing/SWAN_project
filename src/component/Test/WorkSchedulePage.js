import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WorkSchedulePage.css"; // WorkSchedulePage 스타일 파일

const WorkSchedulePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("업로드 되었습니다.");
      navigate("/settings");
    }, 3000);
  };

  return (
    <div className="work-schedule-page">
      <h2>근무 스케줄 업로드</h2>
      <button onClick={handleUpload} disabled={loading}>
        {loading ? (
          <span className="spinner"></span>
        ) : (
          "근무 스케줄 업로드 하기"
        )}
      </button>
      {loading && <p>업로드 중입니다...</p>}
    </div>
  );
};

export default WorkSchedulePage;

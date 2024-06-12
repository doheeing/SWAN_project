import React from "react";
import { useNavigate } from "react-router-dom";
import "./SleepModePage.css";

const SleepModePage = () => {
  const navigate = useNavigate();

  return (
    <div className="sleep-mode-page">
      <h2>근무별 수면 모드 설정</h2>
      <p className="info-text">
        <div>수동 설정 모드입니다. </div>
        <div>설정하지 않으면 근무 스케줄 기반으로 알람이 자동 설정 됩니다.</div>
      </p>
      <button onClick={() => navigate("/day-mode")}>데이 모드 설정</button>
      <button onClick={() => navigate("/evening-mode")}>
        이브닝 모드 설정
      </button>
      <button onClick={() => navigate("/night-mode")}>나이트 모드 설정</button>
      <button onClick={() => navigate("/settings")}>뒤로가기</button>
    </div>
  );
};

export default SleepModePage;

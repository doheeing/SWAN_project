import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SolutionDetailLoadingPage.style.css";

const SolutionDetailLoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/solutiondetail"); // 실제 라우터 경로에 맞게 변경
    }, 5000); // 5초 후에 페이지 이동

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>이화양님의 근무스케줄 기반</p>
      <p>수면 솔루션 생성 중입니다</p>
      <p>SWAN은 532,456개의 데이터를 기반하고 있습니다</p>
    </div>
  );
};

export default SolutionDetailLoadingPage;

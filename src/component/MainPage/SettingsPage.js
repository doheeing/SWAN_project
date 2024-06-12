import React from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css";
import Footer from "../../layout/Footer";

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-page">
      <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Profile"
        className="profile-img"
      />
      <h2>설정</h2>
      <button onClick={() => navigate("/work-schedule")}>근무표 등록</button>
      <button onClick={() => navigate("/sleep-mode")}>
        근무별 수면모드 설정
      </button>
      <button onClick={() => navigate("/solution-change")}>
        솔루션/수면패키지 변경
      </button>
      <button onClick={() => navigate("/language")}>기본언어</button>
      <button onClick={() => navigate("/general-info")}>일반 정보</button>
      <div className="toggle-switch">
        <span>데이터 연동</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>건강 앱</span>
      </div>
      <Footer/>
    </div>
  );
};

export default SettingsPage;

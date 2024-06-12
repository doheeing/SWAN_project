import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import Footer from "../../layout/Footer";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="profile-page">

        <h2>프로필 설정</h2>
        <button onClick={() => navigate("/submit-data")}>
          2주 데이터 제출
        </button>
        <button onClick={() => navigate("/settings")}>설정</button>
        <button onClick={() => navigate("/sleep-info")}>수면 정보</button>
        <button onClick={() => navigate("/health-checklist")}>
          수면 건강 체크리스트
        </button>
        <button onClick={() => navigate("/notifications")}>알림</button>
        <button onClick={() => navigate("/privacy")}>개인정보 보호</button>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

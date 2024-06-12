import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/first");
  };

  return (
    <div className="confirmation-container">
      <p>1-2일 내 배송 예정입니다.</p>
      <p>사용 후 2주 뒤에 다시 만나요</p>
      <button className="back-button" onClick={handleButtonClick}>
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default ConfirmationPage;

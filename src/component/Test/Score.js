import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faRedo } from "@fortawesome/free-solid-svg-icons";
import "./Score.style.css";

const Score = () => {
  const navigate = useNavigate();

  const handleSolutionClick = () => {
    navigate("/solution-detail");
  };

  const gotoSolutionPage = () => {
    navigate("/solution");
  };

  const gotoCommentaryPage = () => {
    navigate("/commentPage");
  };

  const handleShare = () => {
    // 공유 기능 추가
  };

  const handleRetry = () => {
    navigate("/chatbot");
  };

  return (
    <div className="score-container">
      <header className="score-header">수면 분석 결과</header>
      <div className="score-message">
        <p>이화양님의 이번달 위험근무는 총 6개 입니다.</p>
        <p className="tooltip">
          위험 근무란?
          <span className="tooltiptext">
            나이트 오프 데이 <br />
            이브닝 오프 데이 <br />
            쓰리 나이트 이상 <br />등 생체리듬에 큰 변화를 줄 수 있는 스케줄을
            말합니다.
          </span>
        </p>
      </div>
      <div className="score-text">
        활동할 때 졸리고 수면 중에 자주 눈뜨는 당신!
        <br />
        <strong>
          이화양님은 <span className="highlight">꾸벅꾸벅</span> 타입입니다
        </strong>
      </div>
      <div className="button-group">
        <button className="score-button" onClick={gotoCommentaryPage}>
          내 결과 보러가기
        </button>
        <button className="score-button" onClick={gotoSolutionPage}>
          솔루션 시작하기
        </button>
      </div>
      <div className="additional-buttons">
        <button className="icon-button" onClick={handleShare}>
          <FontAwesomeIcon icon={faShareAlt} size="4x" />
          <div>공유하기</div>
        </button>
        <button className="icon-button" onClick={handleRetry}>
          <FontAwesomeIcon icon={faRedo} size="4x" />
          <div>다시하기</div>
        </button>
      </div>
    </div>
  );
};

export default Score;

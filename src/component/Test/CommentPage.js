import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CommentPage.style.css";

const CommentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "사용자";
  const gotoSolutionPage = () => {
    navigate("/solution");
  };
  return (
    <div className="comment-page-container">
      <div className="comment-page-content">
        <h1>수면 평가 결과</h1>
        <p>
          아쉽게도, {username}님은 꾸벅꾸벅 타입입니다. 이는 여러 가지 요인으로
          인해 수면의 질이 좋지 않음을 의미합니다.
        </p>
        <div className="comment-page-content-phrase">
          <h4>수면의 질이 낮은 이유는 다음과 같을 수 있습니다</h4>

          <p> 충분한 수면 시간을 확보하지 못했습니다.</p>
          <p>수면 시간과 기상 시간이 일정하지 않습니다.</p>
          <p>스트레스가 높아 수면의 질이 떨어집니다.</p>
          <p>식사, 운동 등 생활 습관이 불규칙합니다.</p>
        </div>
        <div className="comment-page-content-phrase">
          <h4>이를 개선하기 위해 다음과 같이 개선해보세요</h4>

          <p>매일 같은 시간에 잠자리에 들고 일어나기.</p>
          <p>어두운 조명, 조용한 환경, 편안한 침구 사용.</p>
          <p>명상, 요가, 심호흡 등의 스트레스 완화 방법 시도.</p>
          <p>적절한 운동을 통해 신체 리듬을 일정하게 유지.</p>
        </div>
        <p>
          더 나은 수면을 위해 노력해보세요! 추가적인 도움이나 정보가 필요하면
          전문가와 상담해 보시기 바랍니다.
        </p>
      </div>
      <button className="comment-button" onClick={gotoSolutionPage}>
        솔루션 받아보기
      </button>
    </div>
  );
};

export default CommentPage;

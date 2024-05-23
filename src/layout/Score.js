import React from "react";
import { useNavigate } from "react-router-dom";

const Score = () => {
  const navigate = useNavigate();
  const gotoSolutionPage = () => {
    navigate("/solution");
  };
  const gotoCommentaryPage = ()=>{
    navigate("/commentPage")
  }
  return (
    <div>
      <div>당신의 수면 점수는 87점 입니다</div>
      <div>
        <button onClick={gotoCommentaryPage}>내 결과 보러가기</button>
        <button onClick={gotoSolutionPage}>솔루션 시작하기</button>
      </div>
    </div>
  );
};

export default Score;

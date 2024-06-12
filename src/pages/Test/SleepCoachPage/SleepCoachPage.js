import React from "react";
import "./SleepCoachPage.css";
import Footer from "../Footer/Footer";

const SleepCoachPage = () => {
  return (
     <div className="page-container">
    <div className="sleep-coach-container">
      <h1>수면 전문가 1:1 코칭</h1>
      <button className="help-button">
        이런 고민도 상담을 받아도 될까? 알기!
      </button>
      <div className="coach-card">
        <h2>임명숙 상담사</h2>
        <p>상담 스타일: 장점과 위로</p>
        <p>상담 리뷰: 4.8점 (722명)</p>
        <p>상담 비용: 65,000원</p>
        <button className="best-button">BEST 추천 #1</button>
        <button className="quick-button">5분 내 바로상담 가능</button>
      </div>
      <div className="coach-card">
        <h2>안은주 상담사</h2>
        <p>상담 스타일: 약한 것 은폐</p>
        <p>상담 리뷰: 4.8점 (461명)</p>
        <p>상담 비용: 70,000원</p>
        <button className="best-button">BEST 추천 #2</button>
      </div>
      <div className="coach-card">
        <h2>오성훈 상담사</h2>
        <p>상담 스타일: 위로와 공감</p>
        <p>상담 리뷰: 4.5점 (161명)</p>
        <p>상담 비용: 30,000원</p>
        <button className="best-button">BEST 추천 #3</button>
      </div>
      <div className="coach-card">
        <h2>박나은 상담사</h2>
        <p>상담 스타일: 분석과 조언</p>
        <p>상담 리뷰: 4.4점 (831명)</p>
        <p>상담 비용: 90,000원</p>
        <button className="best-button">BEST 추천 #4</button>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SleepCoachPage;

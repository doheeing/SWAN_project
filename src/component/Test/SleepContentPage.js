import React from "react";
import YouTube from "react-youtube";
import "./SleepContentPage.css";
import Footer from "../../layout/Footer";

const SleepContentPage = () => {
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="page-container">
      <div className="sleep-content-container">
        <h1>수면에 도움이 되는 영상</h1>
        <div className="video-card">
          <div className="video-wrapper">
            <YouTube videoId="drQKI5wKqIk" opts={videoOptions} />
          </div>
          <p>잠이 오지 않을 때 침대에 누워있지 마세요</p>
        </div>
        <div className="video-card">
          <div className="video-wrapper">
            <YouTube videoId="BrCdb7LQHNM" opts={videoOptions} />
          </div>
          <p>수면제 없이 잠 자는 법</p>
        </div>
        <div className="video-card">
          <div className="video-wrapper">
            <YouTube videoId="hfEf0kGwSqo" opts={videoOptions} />
          </div>
          <p>교대근무자의 수면방법</p>
        </div>
        <div className="video-card">
          <div className="video-wrapper">
            <YouTube videoId="TgyDQVYL9Vc" opts={videoOptions} />
          </div>
          <p>교대근무를 위한 건강한 수면 관리법</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SleepContentPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.style.css";

function Chatbot() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    setStep(1);
  };

  const handleOptionClick = (nextStep) => {
    setStep(nextStep);
  };

  const handleSolutionClick = () => {
    navigate("/score");
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="chatbot-question">
            <p>이름을 입력하세요</p>
            <form onSubmit={handleNameSubmit}>
              <input type="text" name="name" required />
              <button type="submit">다음</button>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="chatbot-question">
            <p>
              <div>안녕하세요. {name}님. </div>
              <div>지금부터 수면 분석을 시작할게요. </div>
              <div>하루에 몇 시간 주무시나요?</div>
            </p>
            <button onClick={() => handleOptionClick(2)}>1~3시간</button>
            <button onClick={() => handleOptionClick(2)}>3~6시간</button>
            <button onClick={() => handleOptionClick(2)}>6~8시간</button>
            <button onClick={() => handleOptionClick(2)}>8시간 이상</button>
            <button onClick={() => handleOptionClick(2)}>불규칙하다</button>
            <button onClick={() => handleOptionClick(2)}>잘 모르겠다</button>
          </div>
        );
      case 2:
        return (
          <div className="chatbot-question">
            <p>교대근무가 수면에 영향이 있나요?</p>
            <button onClick={() => handleOptionClick(3)}>네</button>
            <button onClick={() => handleOptionClick(3)}>아니오</button>
          </div>
        );
      case 3:
        return (
          <div className="chatbot-question">
            <p>이번주 근무 스케줄을 알려주세요</p>
            <button onClick={() => handleOptionClick(4)}>
              파일 업로드 하기
            </button>
          </div>
        );
      case 4:
        return (
          <div className="chatbot-question">
            <p>평소에 관심 있던 해결방법을 알려주세요</p>
            <button onClick={() => handleOptionClick(5)}>안대</button>
            <button onClick={() => handleOptionClick(5)}>수면보조제</button>
            <button onClick={() => handleOptionClick(5)}>심리상담</button>
            <button onClick={() => handleOptionClick(5)}>귀마개</button>
          </div>
        );
      case 5:
        return (
          <div className="chatbot-question">
            <p>컴퓨터: "수면 솔루션에 관심이 있으면 다음 을 눌러주세요"</p>
            <button onClick={handleSolutionClick}>다음</button>
          </div>
        );
      default:
        return <p>잘못된 단계입니다.</p>;
    }
  };

  return <div className="Chatbot">{renderStep()}</div>;
}

export default Chatbot;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.style.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "수면 관련 진단을 시작하겠습니다. 우선, 근무 스케줄 파일을 업로드 해주세요.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleFileUpload = () => {
    setUploading(true);
    setMessages([...messages, { sender: "bot", text: "근무 스케줄 분석중" }]);
    setTimeout(() => {
      setUploading(false);
      setMessages((prevMessages) => {
        const newMessages = prevMessages.slice(0, -1);
        return [
          ...newMessages,
          {
            sender: "bot",
            text: "근무 스케줄 분석을 완료 했습니다. 몇 가지 질문을 바탕으로 추가적인 수면 분석을 시작하겠습니다.",
          },
          { sender: "bot", text: "수면이 힘들었던 날짜를 입력하세요" },
        ];
      });
      setStep(step + 1);
    }, 3000);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessages = [...messages, { sender: "user", text: inputValue }];
    setInputValue("");
    setMessages(newMessages);

    setTimeout(() => {
      if (step === 1) {
        setMessages([
          ...newMessages,
          { sender: "bot", text: "해당일에 주무신 시간을 입력해주세요" },
        ]);
      } else if (step === 2) {
        setMessages([
          ...newMessages,
          { sender: "bot", text: "수면을 하지 못한 이유를 입력 해주세요." },
        ]);
      } else if (step === 3) {
        setMessages([...newMessages, { sender: "bot", text: "수면 분석중" }]);
        setTimeout(() => {
          setMessages([
            ...newMessages,
            {
              sender: "bot",
              text: "이화양님의 이번달 근무 중 위험 근무는 6개 입니다.",
            },
          ]);
          setTimeout(() => {
            navigate("/score");
          }, 5000);
        }, 3000);
      }
      setStep(step + 1);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chatbot-message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input-container">
        {step === 0 && !uploading && (
          <button className="chatbot-button" onClick={handleFileUpload}>
            근무 스케줄 업로드
          </button>
        )}
        {step > 0 && step < 4 && (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="chatbot-input"
              placeholder="입력하세요..."
            />
            <button className="chatbot-button" onClick={handleSend}>
              전송
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;

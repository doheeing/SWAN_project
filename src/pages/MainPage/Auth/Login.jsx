import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.style.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 로그인 처리 로직 (예: 사용자 인증)
    navigate("/first", { state: { username: "사용자님" } });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-area">
      <h1>로그인</h1>
      아이디
      <input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      비밀번호
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <span className="id-remember">
        <span>
          <input type="checkbox" />
        </span>
        <span>아이디 기억하기</span>
      </span>
      <div className="login-button-area">
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
        <button className="login-button" onClick={handleSignup}>
          회원가입
        </button>
      </div>
      <span className="login-icon">
        <div>간편 로그인</div>
        <div className="login-icon-button-area">
          <button
            className="icon-button"
            onClick={() => window.open("https://www.kakaocorp.com/page/")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/kakao.png`}
              alt="Kakao Login"
            />
          </button>
          <button
            className="icon-button"
            onClick={() => window.open("https://www.naver.com")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/naver.svg`}
              alt="Naver Login"
            />
          </button>
        </div>
      </span>
    </div>
  );
};

export default Login;

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
      이름
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      비밀번호
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <span>
        <input type="checkbox" />
        <span>아이디 기억하기</span>
      </span>
      <div>
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
        <button className="login-button" onClick={handleSignup}>
          회원가입
        </button>
      </div>
      <span className="login-icon">
        <div>간편 로그인</div>
        <div>
          <button
            onClick={() => window.open("https://www.kakaocorp.com/page/")}
          >
            <img src={`${process.env.PUBLIC_URL}/kakao.png`} alt="Sleep" />
          </button>
          <button onClick={() => window.open("www.naver.com")}>
            <img src={`${process.env.PUBLIC_URL}/naver.svg`} alt="Sleep" />
          </button>
        </div>
      </span>
    </div>
  );
};

export default Login;

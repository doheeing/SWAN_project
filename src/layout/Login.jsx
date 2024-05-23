import React from "react";
import "./Login.style.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const gotoMainpage = () => {
    navigate("/main");
  };
  return (
    <Container>
      <div className="login-area">
        <div>
          <div>아이디</div>
          <input type="email" className="login-id-password" />
        </div>
        <div>
          <div>비밀번호</div>
          <input type="password" className="login-id-password" />
        </div>
        <span>
          <input type="checkbox" />
          <span>아이디 기억하기</span>
        </span>
        <div>
          <button onClick={gotoMainpage}>로그인</button>
        </div>
        <span className="login-icon">
          <div>간편 로그인</div>
          <div>
            <img src="https://i.namu.wiki/i/NYxZHwKfE4SLiG8DFPJn46fsdGeyf413voYGlXFvQ5YDcjnSzKWlVjz3hNW___88iE_7nLjIF6Yf8abkULq-RF4cnBTt1EqtFf0njS7USK4HwHqDWRcg2xTr-7-8l4W5XzJXPZ5bntT7VB-2-H0brw.svg" />
            <img src="https://i.namu.wiki/i/D0d0ZZ43ul3SKWZY-fbkQ-Q0bwIBGxRL_5Z-rhb13uobs-abQ2bvFVRvsd-J1Ejo-nL2_XwgKiIUutEkU57pJr1LuNXbQx7pLQDS3J896Kj2ERMsssx_KBqDxX2Qiv9bzPRtt1s11gQhLXflujb-Uw.svg" />
          </div>
        </span>
      </div>
    </Container>
  );
};

export default Login;

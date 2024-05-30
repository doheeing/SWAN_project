import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.style.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workType, setWorkType] = useState("");
  const [workHours, setWorkHours] = useState([""]);

  const handleAddWorkHour = () => {
    setWorkHours([...workHours, ""]);
  };

  const handleWorkHourChange = (index, value) => {
    const newWorkHours = workHours.slice();
    newWorkHours[index] = value;
    setWorkHours(newWorkHours);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 처리 로직 (예: 서버에 데이터 전송)
    navigate("/first", { state: { username: name } });
  };

  return (
    <div className="signup-container">
      <header className="signup-header">회원가입</header>
      <form className="signup-content" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-input"
        />
        <input
          type="text"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="signup-input"
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <div className="signup-input">
          <label>근무 유형:</label>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
          >
            <option value="3교대">3교대</option>
            <option value="2교대">2교대</option>
            <option value="데이전담">데이전담</option>
            <option value="이브닝전담">이브닝전담</option>
            <option value="나이트전담">나이트전담</option>
            <option value="기타근무">기타근무</option>
          </select>
        </div>
        <div className="signup-workhours">
          {workHours.map((hour, index) => (
            <input
              key={index}
              type="text"
              placeholder="근무시간을 입력하세요.(예 : 데이 7시-3시)"
              value={hour}
              onChange={(e) => handleWorkHourChange(index, e.target.value)}
              className="signup-input"
            />
          ))}
          <button
            type="button"
            className="signup-button"
            onClick={handleAddWorkHour}
          >
            근무시간 입력 추가
          </button>
        </div>
        <button type="submit" className="signup-button" onClick={handleSubmit}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;

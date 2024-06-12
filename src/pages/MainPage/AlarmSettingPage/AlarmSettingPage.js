import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AlarmSettingPage.css";

const AlarmSettingPage = () => {
  const navigate = useNavigate();
  const [bedtime, setBedtime] = useState(new Date());
  const [waketime, setWaketime] = useState(new Date());

  const handleBedtimeChange = (date) => {
    setBedtime(date);
  };

  const handleWaketimeChange = (date) => {
    setWaketime(date);
  };

  const handleAddTime = () => {
    // 시간을 저장하는 로직이 필요하면 여기에 추가
    navigate("/sleep-mode");
  };

  return (
    <div className="alarm-setting-page">
      <h2>알람 설정</h2>
      <p className="info-text">
        <div>수동 설정 모드입니다. </div>
        <div>설정하지 않으면 근무 스케줄 기반으로 알람이 자동 설정 됩니다.</div>
      </p>
      <div className="alarm-setting">
        <div className="alarm-section">
          <h3>전체 일정</h3>
          <div className="time-picker">
            <p>매일</p>
            <div className="time-picker-row">
              <label>취침 시간:</label>
              <DatePicker
                selected={bedtime}
                onChange={handleBedtimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="시간"
                dateFormat="h:mm aa"
                className="custom-time-picker"
              />
            </div>
            <div className="time-picker-row">
              <label>기상 시간:</label>
              <DatePicker
                selected={waketime}
                onChange={handleWaketimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="시간"
                dateFormat="h:mm aa"
                className="custom-time-picker"
              />
            </div>
          </div>
          <button onClick={handleAddTime}>저장</button>
        </div>
      </div>
    </div>
  );
};

export default AlarmSettingPage;

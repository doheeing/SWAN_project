import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddressPage.css";

const AddressPage = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 주소 저장 로직 추가 가능
    navigate("/confirmation");
  };

  return (
    <div className="address-container">
      <form onSubmit={handleSubmit}>
        <label>
          주소를 입력하세요:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default AddressPage;

import React from "react";
import "./SolutionDetailPage.style.css";

const SolutionDetailPage = () => {
  return (
    <div className="solution-detail-container">
      <img
        src={`${process.env.PUBLIC_URL}/sleep.png`}
        alt="Sleep"
        className="solution-detail-image"
      />
    </div>
  );
};

export default SolutionDetailPage;

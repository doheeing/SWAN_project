import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataAnalysisPage3.css";

const DataAnalysisPage3 = () => {
  const navigate = useNavigate();

  return (
    <div className="data-analysis-page">
      <h2>수면 단계별 분석</h2>
      <div className="analysis-details">
        <h3>REM 수면 (2시간)</h3>
        <p>
          <strong>특징:</strong> REM 수면은 꿈을 꾸는 시간이 많고 뇌의 활동이
          활발한 단계입니다. 이 단계는 기억력과 학습 능력, 감정 처리에 중요한
          역할을 합니다.
        </p>
        <p>
          <strong>분석:</strong> REM 수면 시간이 평균적으로 2시간인 점은 건강한
          성인 기준에서 적절한 수준입니다.
        </p>

        <h3>Core 수면 (3시간 30분)</h3>
        <p>
          <strong>특징:</strong> Core 수면은 비렘 수면(NREM) 단계 중 가장 긴
          시간을 차지하며, 신체 회복과 면역력 강화에 중요한 역할을 합니다.
        </p>
        <p>
          <strong>분석:</strong> Core 수면 시간은 적절한 수준이며, 신체 회복에
          도움이 되는 양을 유지하고 있습니다.
        </p>

        <h3>깊은 수면 (30분)</h3>
        <p>
          <strong>특징:</strong> 깊은 수면은 NREM 수면의 가장 깊은 단계로,
          신체의 회복과 성장 호르몬 분비가 활발히 일어나는 시기입니다.
        </p>
        <p>
          <strong>분석:</strong> 깊은 수면 시간이 30분으로 짧은 편입니다. 이는
          신체 회복이 완전하지 않을 수 있음을 의미할 수 있습니다.
        </p>

        <h3>종합 평가 및 추천 사항</h3>
        <p>
          수면 패턴은 전반적으로 안정적이며, REM 수면과 Core 수면은 적절한
          수준을 유지하고 있습니다. 그러나 깊은 수면 시간이 다소 짧은 점은
          개선할 필요가 있습니다.
        </p>
      </div>
      <button onClick={() => navigate("/profile")}>뒤로 가기</button>
    </div>
  );
};

export default DataAnalysisPage3;

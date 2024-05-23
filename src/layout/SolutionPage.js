import React from "react";
import { useNavigate } from "react-router-dom";

const SolutionPage = () => {
  const navigate = useNavigate();

  const gotoAgreementPage = () => {
    navigate("/agreement");
  };
  return (
    <div>
      <h1>수면 솔루션</h1>
      <p>안녕하세요, 수면 개선을 위해 두 가지 솔루션을 제공해 드립니다:</p>
      <h2>Solution A</h2>
      <p>
        Solution A는 규칙적인 수면 습관을 형성하는 데 중점을 둡니다. 매일 같은
        시간에 잠자리에 들고 일어나는 것을 목표로 합니다. 이 솔루션은 수면
        일지를 작성하고, 수면 환경을 최적화하며, 수면 리듬을 일정하게 유지하는
        방법을 포함합니다.
      </p>
      <h2>Solution B</h2>
      <p>
        Solution B는 스트레스 관리와 심리적 안정에 중점을 둡니다. 이 솔루션은
        명상, 요가, 심호흡 등의 스트레스 완화 기법을 포함하며, 더 나은 수면을
        위한 심리적 준비를 돕습니다. 또한, 수면 전 긴장을 풀 수 있는 다양한
        활동들을 제안합니다.
      </p>
      <button onClick={gotoAgreementPage}>솔루션 자세히 알아보기</button>
    </div>
  );
};

export default SolutionPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const AgreementPage = () => {
  const navigate = useNavigate();
  const gotoSolutionDetailPage = () => {
    navigate("/solutiondetail");
  };

  return (
    <div>
      <div>
        <h1>
          SWAN 솔루션은 사용자의 실시간 신체리듬 분석을 위해 개인정보를
          수집하고자 합니다.
        </h1>
        <h1>개인정보 수집 동의서</h1>
        <p>
          안녕하세요, 저희 서비스는 개인정보 보호법에 따라 귀하의 개인정보를
          안전하게 관리합니다.
        </p>
        <p>아래의 내용을 자세히 읽으신 후 동의 여부를 선택해 주세요.</p>

        <h2>수집하는 개인정보의 항목</h2>
        <p>저희는 다음과 같은 개인정보를 수집합니다:</p>
        <ul>
          <li>이름</li>
          <li>연락처 (이메일 주소 및 전화번호)</li>
          <li>수면 패턴 및 건강 관련 정보</li>
        </ul>

        <h2>개인정보의 수집 및 이용 목적</h2>
        <p>수집된 개인정보는 다음의 목적을 위해 이용됩니다:</p>
        <ul>
          <li>사용자 맞춤형 수면 솔루션 제공</li>
          <li>서비스 개선을 위한 데이터 분석</li>
          <li>이벤트 및 프로모션 안내</li>
        </ul>

        <h2>개인정보의 보유 및 이용 기간</h2>
        <p>
          귀하의 개인정보는 수집 및 이용 목적이 달성된 후에는 즉시 파기됩니다.
          단, 관련 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안
          안전하게 보관됩니다.
        </p>

        <h2>개인정보 제공 동의 거부 권리</h2>
        <p>
          귀하는 개인정보 제공에 대해 동의하지 않을 권리가 있습니다. 다만,
          동의하지 않을 경우 서비스 이용에 제한이 있을 수 있습니다.
        </p>
      </div>
      <button onClick={gotoSolutionDetailPage}>동의하고 계속하기</button>
    </div>
  );
};

export default AgreementPage;

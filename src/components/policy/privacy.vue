<template>
    <Header :isLoggedIn="isLoggedIn" @logout="handleLogout"></Header>
    <div class="container">
    <div class="privacy">
        <h2>Newsnippet 개인정보처리방침</h2>
        <br>
        <p>Newsnippet은 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『통신비밀보호법』, 『전기통신사업법』, 『개인정보보호법』 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자의 권익 보호에 최선을 다하고 있습니다.<br>
           본 개인정보처리방침은 이용자가 Newsnippet에서 관리 및 운영하는 서비스 플랫폼(웹, 모바일 웹, 이하 '플랫폼'이라 합니다.)에서 제공하는 서비스를 이용함에 적용되며, 다음과 같은 내용을 담고 있습니다.<br> 
        </p>
        <h5>제1조 (수집하는 개인정보 항목 및 수집방법)</h5>
        <p>① 회사는 이용자의 회원가입 및 관리, 각종 서비스 제공, 원할한 고충처리, 맞춤형 서비스 제공을 위해 이용자로부터 다음의 개인정보를 수집하고 있습니다.</p>
        <div class="table-container">
            <table>
            <thead>
                <tr>
                <th>구분</th>
                <th>필수여부</th>
                <th>수집항목</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>회원가입</td>
                <td>필수</td>
                <td>이름, 이메일주소, 비밀번호</td>
                </tr>
                <tr>
                <td>SNS 로그인</td>
                <td>필수</td>
                <td>이름, 카카오계정(이메일주소), 프로필정보(닉네임, 프로필사진), 카카오 채널 추가 상태 및 내역</td>
                </tr>              
            </tbody>
            </table>
        </div>
        <p>② 제1항의 개인정보 항목 외에 서비스 이용 과정이나 앱 실행 과정에서 IP Address, 쿠키, 방문일시, 서비스 이용기록, 불량 이용기록, 기기정보가 수집될 수 있으며, 
        고객 문의 접수 및 처리 과정에서 이메일 주소나 전화번호가 수집될 수 있습니다.
        </p>
        <p>③ Newsnippet은 사용자의 기본적 인권 침해 우려가 있는 민감한 개인정보(인종, 사상, 신조, 정치적 성향, 범죄기록, 의료정보 등)는 수집하지 않습니다. 
        </p>
        <p>④ Newsnippet은 수집한 개인정보를 수집 목적 이외의 용도로 사용되지 않으며 수집 및 이용 목적이 변경될 시에는 이용자로부터 별도의 사전동의를 구합니다.
        </p>
        <p>⑤ Newsnippet은 다음과 같은 방법으로 이용자의 개인정보를 수집할 수 있습니다. 
        </p>
        <ul>
            <li>홈페이지, 모바일기기, 이메일</li>
            <li>생성정보 수집 툴을 통한 수집</li>
        </ul>
        <br>
        <h5>제2조 (수집한 개인정보의 이용목적)</h5>
        <p>Newsnippet은 이용자로부터 수집한 정보를 다음과 같은 목적을 위해 활용합니다.</p>
        <p>① 회원가입, 사용자와 약속한 서비스 제공, 서비스 제공에 따른 본인인증, Newsnippet의 서비스 이용내역 제공 등을 위하여 개인정보를 이용합니다.</p>
        <p>② 회원 가입 의사의 확인, 사용자 식별, 회원탈퇴 의사의 확인, 문의사항 또는 불만처리 등 회원관리를 위하여 개인정보를 이용합니다.</p>
        <p>③ 법령 및 Newsnippet에서 정한 정책을 위반하는 이용자에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원할한 운영에 지장을 주는 행위 및 비인가 행위에 대한 방지 및 제재, 
            계정도용 및 부정거래 방지, 고지사항 전더, 분쟁 조정을 위한 기록보존 등 이용자 보호 및 서비스 이용환경을 확인하고 안정적인 운영을 위하여 개인정보를 이용합니다. </p>
        <p>④ 기능개선, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 기반하여 사용자의 서비스 이용 성향, 관심, 이용기록 분석 등을 반영한 신규 서비스 제공 등에 개인정보를 이용합니다.</p>
        <br>
        <h5>제3조 (개인정보의 보유 및 이용기간)</h5>
        <p>Newsnippet은 원칙적으로 사용자의 개인정보를 회원 탈퇴 시까지 보유합니다. 다만, 다음의 사유에 해당하는 경우 해당 사유 종료시까지 개인정보를 보유합니다.</p>
        <p>① Newsnippet은 거래 관련 분쟁 방지 등을 위하여 다음과 같은 경우에는 회원 탈퇴 이후에도 명시한 기간동안 보유합니다.</p>
        <P>&nbsp;&nbsp;가. Newsnippet 내부 방침에 의한 개인정보 보존 사유</P>
        <ul>
            <li>부정이용의 기록(부정이용이란, ①회사가 정한 정책(약관 등 포함)에 위배되는 방법이나 내용의 거래, ②회사, 회원, 제3자의 권리나 이익을 침해하는 방법이나 거래, ③'①과 ②'에 준하는 내용의 거래를 의미합니다)</li>
            <li>보존이유: 부정이용 관리 및 조치</li>
            <li>보존기간: 1년</li>
        </ul>
        <P>&nbsp;&nbsp;나. 사용자에 대하여 관계 법령 위반에 따른 수사 및 조사 등이 진행중인 경우: 해당 수사 및 조사 종료 시까지</P>
        <br>
        <h5>제4조 (이용자의 권리 및 의무)</h5>
        <p>① 사용자는 아래와 같은 권리를 행사할 수 있습니다.</p>
        <p>1. 사용자는 Newsnippet에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있으며, 회원 탈퇴 절차를 통하여 개인정보 이용에 대한 동의를 철회할 수 있습니다. 이때 Newsnippet은 위의 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p>
        <p>2. 위 1.에 따른 권리 행사는 Newsnippet에 대해 전자우편 등을 통해 하실 수 있으며 Newsnippet은 이에 대해 지체 없이 조치하겠습니다.</p>
        <p>3. Newsnippet은 사용자의 개인정보 처리 정지 요구가 있는 경우에도 아래에 해당하는 경우에는 처리 정지 요구를 거절할 수 있습니다.</p>
        <ul>
            <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
            <li>개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지 의사를 명확하게 밝히지 아니한 경우</li>
        </ul>
        <p>4. 개인정보 열람 및 처리정지 요구는 관련법령에 의하여 사용자의 권리가 제한될 수 있습니다.</p>
        <p>5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
            또한 개인정보 오류에 대한 정정을 요청한 경우에는 다른 법률에 따라 개인정보의 제공을 요청 받는 경우가 아닌 한 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
            만약 잘못된 개인정보를 이미 제공한 경우에는 정정 처리 결과를 제3자에게 통지하여 정정이 이루어지도록 하겠습니다.
        </p>
        <p>② 사용자는 아래의 내용에 따라 개인정보의 열람 및 정정, 동의의 철회, 동의에 대한 거부권 행사, 탈퇴에 관한 권리를 행사할 수 있습니다.</p>
        <P>&nbsp;&nbsp;1. 개인정보의 열람 및 정정 범위</P>
        <ul>
            <li>회사가 보유하고 있는 사용자의 개인정보</li>
            <li>회사가 이용하거나 제3자에 제공한 개인정보</li>
            <li>개인정보의 수집, 이용, 제공 등의 동의 현황</li>
        </ul>
        <P>&nbsp;&nbsp;2. 회원 탈퇴</P>
        <ul>
            <li>사용자는 플랫폼 내에서 Newsnippet이 정한 절차에 따라 회원탈퇴를 할 수 있습니다.</li>
        </ul>
        <p>③ 사용자는 개인정보주체로서 아래와 같이 개인정보를 스스로 보호할 의무가 있습니다.</p>
        <p>1. 사용자는 개인정보를 항상 최신의 상태로 유지해야 하며, 고객이 입력한 부정확한 정보로 인해 발생한 문제의 책임은 사용자 본인에게 있습니다.</p>
        <p>2. Newsnippet의 귀책사유가 없이 사용자 본인의 부주의나 관계법령에 의한 보안조치로 차단할 수 없는 방법이나 기술을 사용한 해킹 등 Newsnippet이 상당한 주의를 기울였음에도 불구하고 
            통제할 수 없는 인터넷 상의 문제 등으로 개인정보가 유출되어 발생한 문제에 대해 Newsnippet은 책임을 지지 않습니다.
        </p>
        <p>3. 사용자는 이메일, 비밀번호, 접근매체 등 개인정보가 유출되지 않도록 주의해야 하며, 사용자 본인의 부주의로 인하여 발생한 손해에 대해서는 Newsnippet이 책임지지 않습니다.
        </p>
        <p>4. 타인의 개인정보를 도용한 회원가입 또는 서비스 이용 시 사용자 자격 상실과 함께 관련 법령에 따라 처벌될 수 있습니다.</p>
        <p>5. 사용자는 Newsnippet의 개인정보보호정책에 따라 보안을 위해 비밀번호의 주기적 변경 등과 같이 Newsnippet이 요청하는 사항에 협조할 의무가 있습니다.</p>
        <p>6. 사용자는 본 방침과 개인정보에 관한 관련 법령을 준수해야 합니다.</p>
        <br>
        <h5>제5조 (개인정보의 제3자 제공)</h5>
        <p>① Newsnippet은 원칙적으로 사용자의 개인정보를 수집 및 이용목적 범위를 넘어 제3자에게 제공하거나 외부에 공개하지 않습니다.
            다만, 보다 나은 서비스 제공을 위하여 사용자의 개인정보를 협력업체 등과 공유할 필요가 있는 경우에는 제공받는 자, 제공 목적, 제공 정보항목, 이용 및 보유기간 등을 사용자에게 고지하여 동의를 구합니다.
            또한 법령의 규정에 의거하거나, 수사목적으로 법령에서 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우에는 사용자의 개인정보를 제공할 수 있습니다.
        </p>
        <p>② Newsnippet은 사용자의 개인정보를 회사가 제공하는 서비스 외의 용도로 사용하거나 사용자의 동의 없이 제3자에게 제공하지 않습니다.</p>
        <br>
        <h5>제6조 (개인정보의 파기 절차 및 방법)</h5>
        <p>① Newsnippet은 원칙적으로 사용자의 개인정보를 그 수집 및 이용 목적이 달성되면 지체 없이 파기합니다.</p>
        <p>② Newsnippet의 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
        <ul>
            <li>파기 절차: 사용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)
                일정 기간 저장된 후 파기됩니다. 개인정보는 법률에 의한 경우가 아닌 한 보유 및 보존되는 이외의 다른 목적으로 이용되지 않습니다.
            </li>
            <li>파기 방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 사용하여 삭제합니다.</li>
        </ul>
        <br>
        <h5>제7조 (개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항)</h5>
        <p>① Newsnippet은 사용자에게 원활한 서비스 제공을 위하여 사용자들의 정보를 저장하고, 수시로 불러내는 찾아내는 ‘쿠키(cookie)’등을 운용합니다. 
            쿠키란 웹사이트를 운영하는 데 이용되는 서버가 회원의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장되기도 합니다(쿠키의 의미).
        </p>
        <p>② Newsnippet은 사용자의 접속 빈도나 방문 시간 등을 분석, 사용자의 취향과 관심분야를 파악 및 방문 횟수 파악 등을 통한 개인 맞춤 서비스 제공 등의 목적으로 쿠키를 사용합니다.(쿠키의 사용 목적)            
        </p>
        <p>③ 사용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 사용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 따마다 확인을 거치거나, 아니면 모든 쿠기의 저장을 거부할 수도 있습니다
            (쿠키의 설치, 운영 및 거부). 다만, 이용자가 쿠키 설치를 거부하는 경우 로그인이 필요한 서비스 이용에 어려움이 있을 수 있습니다.
        </p>
        <p>④ 제3항에 따라 쿠키 설정을 거부하는 방법으로, 사용자는 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나 모든 쿠키의 저장을 거부할 수 있습니다.
        </p>
        <p>⑤ Newsnippet은 PC환경과 동일·유사한 인터넷 환경을 모바일 서비스에서도 제공하기 위해 모바일 기기(예: 스마트 폰, 태블릿 PC)에서도 '쿠키(cookie)'를 사용할 수 있습니다.
            Newsnippet은 관련 법령 및 규제기관의 가이드라인에 따라 쿠키를 수집하며 단, 사용자의 개인정보를 포함하여 그 자체로 개인을 식별할 수 있는 쿠키는 이용자의 사전 동의 없이 임의로 수집하지 않습니다.
        </p>
        <p>⑥ 모바일 기기에서도 웹 브라우저 설정 기능에서 쿠키 허용 여부를 선택할 수 있습니다. 모바일 기기의 운영체제 및 웹 브라우저 종류에 따라 다소 상이할 수 있지만,
            대부분의 경우 모바일 웹 브라우저의 환경 설정을 통해 쿠키 허용 여부를 결정하거나, 기존의 쿠키 일체를 삭제할 수 있습니다. 
            다만 쿠키의 저장을 거부할 경우, 로그인이 필요한 서비스의 이용에 불편함이 있을 수 있습니다.
        </p>
        <br>
        <h5>제8조 (개인정보보호를 위한 Newsnippet의 노력)</h5>
        <p>① Newsnippet은 사용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 아래와 같이 기술적/관리적 대책을 강구하고 있습니다.</p>
        <ul>
            <li>개인정보 암호화: Newsnippet은 비밀번호 등의 이용자의 개인정보를 법령에서 요구하는 기준에 따라 암호화 처리하고 있습니다. 
                특히, 사용자 개인정보를 저장하고 있는 서버는 외부의 인터넷 라인과 직접 연결하지 않고 별도로 관리하는 등의 보안을 유지하고 있습니다.
            </li>
            <li>해킹 등에 대비한 대책: Newsnippet은 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 
                암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추기 위하여 노력하고 있습니다.
            </li>
        </ul>
        <p>② 제1항에도 불구하고 이용자 본인의 고의 또는 부주의나 인터넷 상의 문제로 이메일, 비밀번호 등 개인정보가 유출·노출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.</p>
        <br>
        <h5>제9조 (개인정보보호책임자 및 연락처)</h5>
        <p>Newsnippet은 개인정보에 대한 의견 수렴 및 불만 처리를 위하여 이를 담당하는 개인정보보호책임자를 아래와 같이 지정하고 있습니다. 사용자가 Newsnippet의 서비스를 이용하면서 발생하는 모든 개인정보보호에 대한 문의, 불만 처리, 피해 구제 등
            관련 민원을 개인정보보호책임자 혹은 담당 부서에 신고하실 수 있습니다. Newsnippet은 사용자들의 문의 및 신고에 대해 신속하게 답변 및 처리해드릴 것입니다.
        </p>
        <ul>
            <li>Tel. 000-000-0000</li>
            <li>Email. abc@gmail.com</li>
        </ul>
        <br>
        <h5>제10조 (고지의무)</h5>
        <p>Newsnippet은 현행 개인정보처리방침에 대한 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 플랫폼 내 공지사항을 통해 고지할 것입니다.
            다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이 회원의 관리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지합니다.
        </p>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/views/Header.vue';

const router = useRouter();
const isLoggedIn = ref(false);

const goToLogin = () => {
  router.push('/login');
};

const checkLoginStatus = () => {
  // 로그인 상태 확인 로직 구현
  // 로그인되어 있으면 isLoggedIn.value를 true로 설정
  // 예시: localStorage에서 토큰 확인
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token;
};

const handleLogout = () => {
  // 로그아웃 로직 구현
  // 예시: localStorage에서 토큰 제거
  localStorage.removeItem('token');
  isLoggedIn.value = false;
};

checkLoginStatus();
</script>

<style scoped>
.container {
    padding: 40px; 
    background-color: transparent;
}

.privacy {
    padding: 40px; 
    background-color: #F4F3F6;
}

h2, h5 {
    font-weight: bold;  
    color: #393B63;   
}

h5 {
    border-top: 2px solid #CCCCCC; 
    padding-top: 20px; 
}

.table-container {
  overflow-x: auto; 
}

table {
  width: 100%; 
  border-collapse: collapse; 
  background-color: #9192a8; 
  color: #fff; 
}

th, td {
  border: 1px solid #000000; 
  padding: 8px; 
  text-align: left; 
}

thead th {
  background-color: #393B63; 
}

</style>
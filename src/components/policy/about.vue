<template>
    <Header :isLoggedIn="isLoggedIn" @logout="handleLogout"></Header>
    <div class="container">
    <div class="about">
        <h2>Newsnippet: 시사/상식의 나침반</h2>
        <br>
        <h5>매일 빠르게 변화하고 있는 세상 속에서 중요한 뉴스를 선별하고 이해하는 것이 어렵게만 느껴지시나요?</h5>
        <br>
        <p>취업준비생들 또는 현장에서 빠르게 변화하는 정보를 요구하는 직종에 종사하는 사람들을 위해 쉽고, 빠르고, 간단하게 퀴즈로 알 수 있는 시사/상식 퀴즈 프로그램!            
        </p>
        <br>
        <p>Newsnippet은 사용자들이 최신 시사 이슈를 퀴즈 형태로 쉽게 학습할 수 있도록 돕는 온라인 플랫폼입나다. 
           Newsnippet은 매일 업데이트 되는 다양한 뉴스 기사를 바탕으로 질문을 생성하며, 사용자는 이를 통해 시사 지식을 테스트하고 강화할 수 있습니다.
           각 퀴즈는 실시간으로 피드백을 제공하여, 사용자가 자신의 이해도를 측정하고 필요한 부분을 집중적으로 복습할 수 있도록 하고 있죠!
        </p>
        <br>
        <p>우리는 Newsnippet을 정기적으로 사용하는 것만으로도 최신의 중요한 이슈들을 빠르게 파악하고 내면화 할 수 있습니다.
           취업준비생이나 시사 정보가 중요한 업무를 담당하는 직장인들에게 Newsnippet은 시간을 효율적으로 관리하며 필요한 지식을 습득하는 데 큰 도움을 줄 것입니다.
           이를 통해 우리는 실제 업무나 면접에서 요구되는 시사 상식을 자연스럽게 활용할 수 있는 역량을 기를 수 있습니다.
        </p>
        <br>
        <h5>시사/상식을 받아드릴 준비 되었나요?</h5>
        <br>
        <br>

        <h5>🔥🔥 그럼 함께 도전해 볼까요! 🔥🔥</h5>


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

.about {
    padding: 40px; 

}

h2, h5 {
    font-weight: bold;  
    color: #393B63;   
}
</style>